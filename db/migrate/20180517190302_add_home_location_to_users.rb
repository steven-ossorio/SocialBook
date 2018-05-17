class AddHomeLocationToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :home_location, :string
  end
end
