class UsersController < ApplicationController
  autocomplete :user, :email
  def show
    @user = User.find(params[:id])
    if current_user.id == @user.id
      @invites = Invite.where(:user_id => current_user.id , :invite_accepted => 'false').paginate(page: params[:page], per_page: 5)
    end
  end
  def get_autocomplete_items(parameters)
    items = super(parameters)
    items = items.where("id NOT IN (?)",current_user)
  end


end
