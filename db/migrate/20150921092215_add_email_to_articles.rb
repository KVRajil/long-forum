class AddEmailToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :image, :attachment
  end
end
