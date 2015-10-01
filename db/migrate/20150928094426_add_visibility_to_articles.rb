class AddVisibilityToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :vsibility, :string
  end
end
