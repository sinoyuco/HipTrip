class EditSpots3 < ActiveRecord::Migration[5.2]
  def change
    add_column(:spots, :description, :text, null: false)
    add_column(:spots, :show_image_urls, :string)
  end
end
