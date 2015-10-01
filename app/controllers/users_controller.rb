class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
      if current_user.id == @user.id
        @invites = Invite.where(:user_id => current_user.id , :invite_accepted => 'false')
      end
  end

end
