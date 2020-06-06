class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :amenity_type, null: false
      t.integer :spot_id, null: false
    end
  end
end
