json.extract! review, :id, :title, :body, :rating, :user_id, :spot_id, :created_at
json.user review.user
json.profile_photo review.user.profile_photo.map{|p| url_for(p)}