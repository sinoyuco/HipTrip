class Booking < ApplicationRecord
    validates :user_id, :spot_id, :start_date, :end_date, :num_guests, :total_price, presence: true

    belongs_to(:user,
        foreign_key: :user_id,
        class_name: :User)

    belongs_to(:spot,
        foreign_key: :spot_id,
        class_name: :Spot)
    
end