class Article < ActiveRecord::Base
  acts_as_taggable
  has_many :comments, dependent: :destroy
  has_many :favorites
  has_many :invites
  belongs_to :user
  validates :title, presence: true,
                    length: { minimum: 5 }
  validates :text,  presence: true
  has_reputation :votes, source: :user, aggregated_by: :sum
  default_scope  { order(:created_at => :desc) }
  def self.popular
    reorder('votes desc').find_with_reputation(:votes, :all)
  end
end
