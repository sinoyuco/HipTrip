class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :bio)
    add_column(:users, :bio, :text)
    add_column(:users, :zip_code, :integer, null: false)
  end
end
