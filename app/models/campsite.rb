class Campsite < ApplicationRecord
    validates :campsite_property_type, :spot_id, presence: true

    belongs_to(:spot, 
        foreign_key: :spot_id,
        class_name: :Spot)
end