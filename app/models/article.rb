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
  has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
end
