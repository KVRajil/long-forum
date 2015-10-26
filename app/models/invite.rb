class Invite < ActiveRecord::Base
  before_save :default_values
  belongs_to :article
  belongs_to :user
  default_scope  { order(:created_at => :desc) }
  def default_values
    self.invite_accepted ||= 'false'
    if  Invite.where(:user_id => self.user_id , :article_id => self.article_id).blank? && self.article.user.id == LongForum.current_user.id && self.article.visibility =="private"
       true
     else
       false
     end
  end
end
