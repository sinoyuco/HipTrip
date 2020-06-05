json.extract! spot, :id, :name, :price, :city, :state, :latitude, :longitude, :category, :host_id, :description
json.image_url spot.image_url
json.photoUrls spot.photos.map{|file| url_for(file)}