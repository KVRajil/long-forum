class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.integer :user_id
      t.integer :article_id
      t.string :invite_accepted

      t.timestamps null: false
    end
  end
end
