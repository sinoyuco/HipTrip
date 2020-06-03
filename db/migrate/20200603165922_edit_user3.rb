class EditUser3 < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :trip_count)
    add_column(:users, :trip_count, :integer)
  end
end
