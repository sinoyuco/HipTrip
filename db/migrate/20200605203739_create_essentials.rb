class CreateEssentials < ActiveRecord::Migration[5.2]
  def change
    create_table :essentials do |t|
      t.string :essential_type, null: false
      t.integer :spot_id, null: false
    end
  end
end
