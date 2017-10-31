class RemoveFriendeeIdFromFriends < ActiveRecord::Migration[5.1]
  def change
    remove_column :friends, :friendee_id, :string
  end
end
