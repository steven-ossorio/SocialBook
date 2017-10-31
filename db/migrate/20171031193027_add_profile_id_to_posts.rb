class AddProfileIdToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :profile_id, :integer
  end
end
