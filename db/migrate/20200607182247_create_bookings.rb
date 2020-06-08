class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :num_guests, null: false
      t.float :total_price, null: false
      t.string :status
    end
  end
end
