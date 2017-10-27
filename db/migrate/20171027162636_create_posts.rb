class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :owner_id, null: false
      t.string :text,  null: false

      t.timestamps
    end
    add_index :posts, :owner_id
  end
end
