class FixColumn < ActiveRecord::Migration
  def change
    rename_column :articles, :vsibility, :visibility
  end
end
