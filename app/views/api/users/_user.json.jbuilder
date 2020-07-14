json.extract! user, :id, :email, :fname, :lname
json.profile_photo user.profile_photo.map{|p| url_for(p)}
json.bookings do
    user.bookings.each do |booking|
        json.set! booking.id do
            json.extract! booking, :id, :user_id, :spot_id, :start_date, :end_date, :num_guests, :total_price
            json.spot booking.spot
        end
    end
end
json.reviews do
    user.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :title, :body, :rating, :user_id, :spot_id, :created_at
            json.user review.user
            json.spot review.spot
            json.profile_photo review.user.profile_photo.map{|p| url_for(p)}
        end
    end
end