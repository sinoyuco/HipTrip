class Review < ApplicationRecord
    validates :title, :body, :rating, :user_id, :spot_id, presence: true

    belongs_to(:spot,
        foreign_key: :spot_id,
        class_name: :Spot)

    belongs_to(:user,
        foreign_key: :user_id,
        class_name: :User)

end