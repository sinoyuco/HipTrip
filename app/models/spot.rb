class Spot < ApplicationRecord
    validates :name, :price, :city, :state, :latitude, :longitude, :host_id, presence: true
    validates :category, inclusion: {in: ['Tent Camping','RV Park', 'Glamping', 'Beach Camping', 'Lake Camping']}

    belongs_to(:user,
        foreign_key: :host_id,
        class_name: :User)

    # function to check for lat and long validation

    #function to calc rating

end