class EditSpots2 < ActiveRecord::Migration[5.2]
  def change
    add_column(:spots, :image_url, :string)
  end
end
