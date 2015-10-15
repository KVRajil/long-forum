class Article < ActiveRecord::Base
  acts_as_taggable
  after_update :visibility_check
  has_many :comments, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :invites, dependent: :destroy
  has_many :sub_articles, class_name: 'Article',foreign_key: 'parent_type' , dependent: :destroy
  has_one  :parent_article, class_name: 'Article',foreign_key: 'id',primary_key: 'parent_type'
  belongs_to :user
  validates :title, presence: true,
                    length: { minimum: 5 }
  validates :text,  presence: true
  has_reputation :votes, source: :user, aggregated_by: :sum
  default_scope  { order(:created_at => :desc) }
  def self.popular
    reorder('votes desc').find_with_reputation(:votes, :all)
  end

  def visibility_check
    if self.visibility == 'public'
      Invite.where(:article_id => self.id).destroy_all
    end
  end
end
