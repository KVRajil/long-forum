class CreateJoinTableForUsersArticles < ActiveRecord::Migration
  def change
    create_table :articles_users, id: false do |t|
      t.belongs_to :article
      t.belongs_to :user
      end
  end
end
