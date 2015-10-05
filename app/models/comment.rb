class Comment < ActiveRecord::Base
  belongs_to :article
  belongs_to :user
  has_reputation :votes, source: :user, aggregated_by: :sum
  acts_as_taggable
  validates :body, presence: true
  default_scope  { order(:created_at => :desc) }
end
