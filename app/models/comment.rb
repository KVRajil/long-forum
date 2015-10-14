class Comment < ActiveRecord::Base
  belongs_to :article
  belongs_to :user
  has_reputation :votes, source: :user, aggregated_by: :sum
  acts_as_taggable
  validates :body, presence: true
  default_scope  { order(:created_at => :desc) }

  def evaluation_value(user, comment)
  if @up_voted = ReputationSystem::Evaluation.where(:reputation_name => "votes",
      :value => "1.0", :source_id => user.id, :source_type => user.class.name,
      :target_id => comment.id, :target_type => comment.class.name).exists?
    "upvoted"
  elsif @down_voted = ReputationSystem::Evaluation.where(:reputation_name => "votes",
      :value => "-1.0", :source_id => user.id, :source_type => user.class.name,
      :target_id => comment.id, :target_type => comment.class.name).exists?
    "downvoted"
  else
    nil
  end
end
end
