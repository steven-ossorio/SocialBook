class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :friender_id, null: false
      t.string :friendee_id, null: false
      t.string :status, null: false, default: "Pending"

      t.timestamps
    end

    add_index :friends, :friender_id
    add_index :friends, :friendee_id
  end
end
