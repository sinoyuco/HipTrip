json.extract! spot, :id, :name, :price, :city, :state, :latitude, :longitude, :category, :host_id, :description
json.image_url spot.image_url
json.photoUrls spot.photos.map{|file| url_for(file)}
json.host spot.host
json.host_photo spot.host.profile_photo.map{|p| url_for(p)}
json.amenities spot.amenities
json.essentials spot.essentials
json.campsites spot.campsites
json.bookings spot.bookings