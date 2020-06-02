class EditUsers2 < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :username)
    add_index(:users, :email, unique: true)
  end
end
