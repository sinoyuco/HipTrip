class EditSpots < ActiveRecord::Migration[5.2]
  def change
    rename_column(:spots, :categtory, :category)
  end
end
