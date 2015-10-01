class AddParentTypeToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :parent_type, :string, :default => 0
  end
end
