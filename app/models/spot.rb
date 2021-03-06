class Spot < ApplicationRecord
    validates :name, :price, :city, :state, :latitude, :longitude, :host_id, presence: true
    validates :category, inclusion: {in: ['Camping','RVs', 'Glamping', 'Beach Camping']}

    belongs_to(:host,
        foreign_key: :host_id,
        class_name: :User)

    has_many(:bookings,
        foreign_key: :spot_id,
        class_name: :Booking)

    has_many(:amenities,
        foreign_key: :spot_id, 
        class_name: :Amenity)

    has_many(:essentials,
        foreign_key: :spot_id, 
        class_name: :Essential)

    has_many(:campsites,
        foreign_key: :spot_id, 
        class_name: :Campsite)

    has_many(:reviews,
        foreign_key: :spot_id,
        class_name: :Review)

    # function to check for lat and long validation
    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
    end

    has_many_attached :photos

    #function to calc rating

end