class CreateCampsites < ActiveRecord::Migration[5.2]
  def change
    create_table :campsites do |t|
      t.string :campsite_property_type, null: false
      t.integer :spot_id, null: false
    end
  end
end
