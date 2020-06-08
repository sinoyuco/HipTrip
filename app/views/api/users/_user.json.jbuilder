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