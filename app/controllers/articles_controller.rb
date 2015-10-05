class ArticlesController < ApplicationController
  autocomplete :tag, :name, :class_name => 'ActsAsTaggableOn::Tag'
  before_filter :find_article,only:[:edit,:show,:update,:destroy,:favorite]
  before_action :set_article_tags_to_gon,only:[:edit]
  before_filter :set_available_tags_to_gon, only: [:new, :edit, :show]
  respond_to :html, :js

  def new
    @parent_type =params[:parent_type]
    if  @parent_type.nil?
      @parent_type =0
    end
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user
    @article.parent_type = params[:parent_type]
    @article.save
    redirect_to @article
  end

  def index
    if params[:tag]
      @articles = Comment.tagged_with(params[:tag]).map { |comment| comment.article}
      @articles += Article.tagged_with(params[:tag])
      @articles.uniq!
    elsif params[:type] == 'public'
      @articles = Article.where(:visibility => 'public')
    elsif params[:type] == 'private'
      @articles = Invite.where(:user_id => current_user.id , :invite_accepted => 'true').map { |invite| invite.article}
    elsif params[:type] == 'my'
      @articles = Article.where(:user_id => current_user.id ) #, :visibility => 'public'
    elsif params[:type] == 'favorite'
      @articles = current_user.favorite_articles
    elsif params[:type] == 'top'
      @articles = Article.where(:visibility => 'public')
      @articles = @articles.sort_by { |article| article.reputation_for(:votes).to_i }.reverse 
    else
      @articles = Article.where(:visibility => 'public')
    end
  end

  def show
    @users = User.where("id NOT IN (?)",current_user)
      if @article.user_id == current_user.id || @article.visibility == "public" || Invite.where(:user_id => current_user.id , :article_id => @article.id ,:invite_accepted => 'true').present?
        @sub_articles = Article.where(:parent_type => @article.id)
        render 'show'
      else
        render :file => 'public/422.html'
      end
  end

  def edit
    if @article.user_id == current_user.id
      render 'edit'
    else
      render :file => 'public/422.html'
    end
  end

  def update
    if @article.update(article_params)
      if @article.visibility == 'public'
        Invite.where(:article_id => @article.id).destroy_all
      end
      redirect_to @article
    else
      render 'edit'
    end
  end

  def destroy
    if @article.user_id ==current_user.id
      @article.destroy
      Article.where(:parent_type => @article.id).destroy_all
      redirect_to articles_path
    else
       render :file => 'public/422.html'
    end
  end

  def vote
    value = params[:type] == "up" ? 1 : -1
    @article = Article.find(params[:id])
    @article.add_or_update_evaluation(:votes, value, current_user)
  end

  def favorite
    if  Favorite.where(:user_id => current_user.id , :article_id => @article.id).blank?
      @favorite = Favorite.new
      @favorite.article_id = @article.id
      @favorite.user_id = current_user.id
      @favorite.save
    else
        Favorite.where(:user_id => current_user.id , :article_id => @article.id).destroy_all
    end
  end

  def invite
    @invite = Invite.new(invite_params)
    if  Invite.where(:user_id => @invite.user_id , :article_id => @invite.article_id).blank?
      @invite.save
    end
  end

  def invite_accept
    invite_id = params[:invite_id]
    Invite.where( id: invite_id ).update_all( invite_accepted: 'true' )
    redirect_to :back
  end

  def invite_reject
    invite_id = params[:invite_id]
    Invite.where( id: invite_id ).destroy_all
    redirect_to :back
  end

  private

  def article_params
    params.require(:article).permit(:title, :text, :tag_list, :visibility, :parent_type)
  end

  def invite_params
    params.permit(:user_id, :article_id, :invite_accepted)
  end

  def set_article_tags_to_gon
    gon.article_tags = @article.tag_list
  end

  def set_available_tags_to_gon
    gon.available_tags = Article.tags_on(:tags).pluck(:name)
  end

  def find_article
    @article = Article.find(params[:id])
  end

end
