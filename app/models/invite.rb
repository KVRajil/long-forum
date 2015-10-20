class Invite < ActiveRecord::Base
  before_save :default_values
  belongs_to :article
  belongs_to :user
  default_scope  { order(:created_at => :desc) }
  def default_values
    self.invite_accepted ||= 'false'
  end
end
