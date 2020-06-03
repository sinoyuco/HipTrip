class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :categtory, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
  end
end
