class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id
      t.integer :comment_id
      t.string :text

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :post_id
    add_index :comments, :comment_id
  end
end
