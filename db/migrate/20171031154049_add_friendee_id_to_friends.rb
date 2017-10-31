class AddFriendeeIdToFriends < ActiveRecord::Migration[5.1]
  def change
    add_column :friends, :friendee_id, :integer
    add_index :friends, :friendee_id
  end
end
