ActiveRecord::Base.transaction do
    Review.destroy_all
    Booking.destroy_all  
    Amenity.destroy_all
    Essential.destroy_all
    Campsite.destroy_all
    Spot.destroy_all
    User.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

file1 = open('https://hiptrip-aa-seed.s3.amazonaws.com/camp1.jpg');
file2 = open('https://hiptrip-aa-seed.s3.amazonaws.com/camp2.jpg');
file3 = open('https://hiptrip-aa-seed.s3.amazonaws.com/camp3.jpg');

jbrown = User.create!(email: 'jbrown@gmail.com', password: 'jbrown123', fname: 'Jaylen', lname: 'Brown', zip_code: 11215)
zwill = User.create!(email: 'zwill@gmail.com', password: 'zwill123', fname: 'Zion', lname: 'Williamson', zip_code: 11215)
dtaurasi = User.create!(email: 'dtaurasi@gmail.com', password: 'pass123', fname: 'Diana', lname: 'Taurasi', zip_code: 11215)
ewatson = User.create!(email: 'emmawatson@gmail.com', password: 'pass123', fname: 'Emma', lname: 'Watson', zip_code: 11215)
dwashington = User.create!(email: 'dwashington@gmail.com', password: 'pass123', fname: 'Denzel', lname: 'Washington', zip_code: 11215)
lneeson = User.create!(email: 'lneeson@gmail.com', password: 'pass123', fname: 'Liam', lname: 'Neeson', zip_code: 11215)
ocolman = User.create!(email: 'ocolman@gmail.com', password: 'pass123', fname: 'Olivia', lname: 'Colman', zip_code: 11215)
demo = User.create!(email: 'demouser@demoemail.com', password: 'demopass123', fname: 'John', lname: 'Doe', zip_code: 11213)



jbrown.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/5602.png'), filename:'5602.png');
zwill.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/6163.png'), filename:'6163.png');
dtaurasi.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/DianaTaurasi2017headshot.png'), filename:'DianaTaurasi2017headshot.png');
demo.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/anon.png'), filename:'anon.png');

ewatson.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/ewatson.jpg'), filename:'ewatson.jpg');
dwashington.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/dwash.jpg'), filename:'dwash.jpg');
lneeson.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/lneeson.jpg'), filename:'lneeson.jpg');
ocolman.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/ocolman.jpg'), filename:'ocolman.jpg');



a1 = Spot.create!(name: 'Red Rock Retreat', price: 100, city:'Golden', state: 'Colorado', latitude: 39.7555, longitude: -105.2211, category: 'RVs', host_id: jbrown.id, image_url: 'https://d2umhuunwbec1r.cloudfront.net/gallery/parks/default-features/featureTwo/red-rock.jpg', description: "Ever heard of the famous Red Rocks of Colorado? We offer you an up close look at the Red Rock Retreat. Bring your RV to experience the best outdoors Colorado has to offer, with plenty of activities and sights to see.")
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv1.png'), filename:'rv1.png')
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv2.png'), filename:'rv2.png')
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv3.png'), filename:'rv3.png')

a2 = Spot.create!(name: 'Jaunty Jungle', price: 80, city:'Bolton', state: 'Mississippi', latitude: 32.3493, longitude: -90.4601, category: 'Camping', host_id: jbrown.id, image_url: 'https://images.squarespace-cdn.com/content/v1/5b76144bec4eb75f241168c2/1537938586141-1FIIXBP7ESPPFA97IIYO/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Jungle_House-surrounding-exotic-+fruit-forests?format=1500w', description: "Come experience southern hospitality at the Jaunty Jungle! Set in the lush forests of Mississippi, our camp site offers a lot of green, but with it, a lot of bugs and wildlife. You better bring a machete, because you'll be whacking plants like Indiana Jones.")
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle1.png'), filename:'jungle1.png')
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle2.png'), filename:'jungle2.png')
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle3.png'), filename:'jungle3.png')

a3 = Spot.create!(name: 'Baffling Bay Beach', price: 80, city:'San Simeon', state: 'California', latitude: 35.6440, longitude: -121.1893, category: 'Beach Camping', host_id: jbrown.id, image_url: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/03/Beach-Camping.jpg', description: "Ever wanted to camp on a beach. Baffling Bay is the perfect place. A quiet and serene setting, you can set up camp right on the sands and sleep with the sound of the waves. There is tide however, so you better not set up camp too close to the water.")
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachfirst.jpg'), filename:'beachfirst.jpg')
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachsecond.jpg'), filename:'beachsecond.jpg')
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachthird.jpg'), filename:'beachthird.jpg')

a4 = Spot.create!(name: 'Shady Shack', price: 20, city:'Austin', state: 'Texas', latitude: 30.305388, longitude: -97.759791, category: 'Camping', host_id: zwill.id, image_url: 'https://cdn.carrot.com/uploads/sites/19301/2020/03/rundown-house-ts-300x197.jpg', description: "Located right out of Northern Austin, you can live a camping experience to the fullest: in a shack. We don't offer much (there are a bunch of benches nearby but that's it), but what did you expect for $20 a night??")
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack1.png'), filename:'shack1.png')
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack2.png'), filename:'shack2.png')
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack3.png'), filename:'shack3.png')

a5 = Spot.create!(name: 'Reliable Residence', price: 60, city:'Austin', state: 'Texas', latitude: 30.179659, longitude: -97.991176, category: 'Camping', host_id: zwill.id, image_url: 'https://houseofbrokersrealty.files.wordpress.com/2013/11/66.jpg', description: "Reliable Residence offers one thing, and you guessed it right: Reliability. Don't expect grandiose camping accomodations or flashy activities. Electricity is working, water is running, prices are reasonable, and you might be able to fit a tent in the backyard.")
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence1.png'), filename:'residence1.png')
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence2.png'), filename:'residence2.png')
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence3.png'), filename:'residence3.png')

a6 = Spot.create!(name: 'Marvelous Mansion', price: 180, city:'Austin', state: 'Texas', latitude: 30.379035, longitude: -97.540192, category: 'Camping', host_id: zwill.id, image_url: 'https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20180918-drakemansion.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp', description: "Marvelous Mansion is exactly what it is, a mansion that has absolutely nothing to do with camping. Not even sure why the listing is on this website, but for you posh millionaires out there who could do without the bugs, this is the place.")
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion1.png'), filename:'mansion1.png')
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion2.png'), filename:'mansion2.png')
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion3.png'), filename:'mansion3.png')

a7 = Spot.create!(name: 'Rave Ranch', price: 100, city:'Iowa City', state: 'Iowa', latitude: 41.635423, longitude: -91.554952, category: 'RVs', host_id: dtaurasi.id, image_url: 'https://images.fineartamerica.com/images-medium-large-5/midwest-farm-tom-weisbrook.jpg', description: "Located in the remotes of Iowa, Rave Ranch offers great outdoors for your family or friends. Friday and Saturday nights are Rave nights at the main barn, so BYOB.")
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldfirst.jpg'), filename:'fieldfirst.jpg')
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldsecond.jpg'), filename:'fieldsecond.jpg')
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldthird.jpg'), filename:'fieldthird.jpg')

a8 = Spot.create!(name: 'Ghost Graveyard', price: 150, city:'Seattle', state: 'Washington', latitude: 47.629955, longitude: -122.362360, category: 'Camping', host_id: dtaurasi.id, image_url: 'https://www.irishcentral.com/uploads/article/134961/cropped_graveyard___getty.jpg?t=1568620780', description: "The Ghost Graveyard is here to fulfill only one goal: to give you the best bar story you can ever imagine. It's as comfortable as you can expect a graveyard to be, but comfort will be the least of your problems. Do not feed the zombies.")
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy1.png'), filename:'gy1.png')
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy2.png'), filename:'gy2.png')
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy3.png'), filename:'gy3.png')

a9 = Spot.create!(name: 'Bombastic Bungalow', price: 200, city:'Portland', state: 'Oregon', latitude: 45.556535, longitude: -122.745964, category: 'Camping', host_id: dtaurasi.id, image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/70/e8/f0/palm-beach-bungalow-resort.jpg', description: "Heard of the famous Northwestern outdoors? Bombastic Bungalow provides the best outdoors activities and your own personal Bungalow to spend the weekend from your dreams.")
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow1.png'), filename:'bungalow1.png')
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow2.png'), filename:'bungalow2.png')
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow3.png'), filename:'bungalow3.png')

a10 = Spot.create!(name: 'Georgia Glamping', price: 500, city:'Atlanta', state: 'Georgia', latitude: 33.767346, longitude: -84.422487, category: 'Glamping', host_id: dtaurasi.id, image_url: 'https://www.glamping.com/static/media/uploads/property/Brush%20Creek%20Ranch/Brush%20Creek%20Ranch%20Yurt.jpg', description: "Looking to camp in style? Visit the Georgia Glaming experience to camp like royalty. Just on the outskirts of Atlanta, we provide the best outdoors scenes and activities, and your accomodation is second to only the Ritz.")
a10.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/glamp/glamp1.png'), filename:'glamp1.png')
a10.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/glamp/glamp2.png'), filename:'glamp2.png')
a10.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/glamp/glamp3.png'), filename:'glamp3.png')

amenity_types = ['Potable Water', 'Kitchen', 'Showers', 'Picnic Table', 'Wifi', 'Bins']
essential_types = ['Campfires', 'Toilet' ,'Pets']
campsite_area = ['Tents', 'Parking', 'ADA Access']
spots = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10];
    spots.each do |spot|

        coin_a = rand(3..6);
        amenity_sub = amenity_types.sample(coin_a)
        amenity_sub.each do |type|
            Amenity.create!(amenity_type: type, spot_id: spot.id)
        end

        coin_b = rand(2..3);
        essential_sub = essential_types.sample(coin_b)
        essential_sub.each do |type|
            Essential.create!(essential_type: type, spot_id: spot.id)
        end

        coin_c = rand(2..3);
        campsite_sub = campsite_area.sample(coin_c)
        campsite_sub.each do |type|
            Campsite.create!(campsite_property_type: type, spot_id: spot.id)
        end

    end

date1 = DateTime.new(2020,6,20)
date2 = DateTime.new(2020,6, 25)
date3 = DateTime.new(2020,7,1)
date4 = DateTime.new(2020,7,2)

Booking.create!(user_id: jbrown.id, spot_id: a4.id, start_date: date1, end_date: date2, num_guests: 1, total_price: 100)
Booking.create!(user_id: jbrown.id, spot_id: a10.id, start_date: date3, end_date: date4, num_guests: 2, total_price: 150)

Booking.create!(user_id: dtaurasi.id, spot_id: a1.id, start_date: date1, end_date: date2, num_guests: 2, total_price: 200)
Booking.create!(user_id: dtaurasi.id, spot_id: a2.id, start_date: date3, end_date: date4, num_guests: 1, total_price: 150)

date1s = DateTime.new(2019, 3, 5);
date1e = DateTime.new(2019, 3, 9);

date2s = DateTime.new(2020, 2, 2);
date2e = DateTime.new(2029, 2, 9);

date3s = DateTime.new(2019, 5, 1);
date3e = DateTime.new(2019, 5, 2);

date4s = DateTime.new(2019, 1, 10);
date4e = DateTime.new(2019, 1, 14);

date5s = DateTime.new(2020, 4, 10);
date5e = DateTime.new(2020, 4, 12);

date6s = DateTime.new(2020, 5, 2);
date6e = DateTime.new(2020, 5, 3);

date7s = DateTime.new(2020, 2, 20);
date7e = DateTime.new(2020, 2, 23);

date8s = DateTime.new(2020, 7, 2);
date8e = DateTime.new(2020, 7, 5);

date9s = DateTime.new(2020, 9, 9);
date9e = DateTime.new(2020, 9, 11);

date10s = DateTime.new(2020, 10, 10);
date10e = DateTime.new(2020, 10, 12);

Booking.create!(user_id: demo.id, spot_id: a1.id, start_date: date1s, end_date: date1e, num_guests: 2, total_price: 200)
Booking.create!(user_id: demo.id, spot_id: a2.id, start_date: date2s, end_date: date2e, num_guests: 1, total_price: 80)
Booking.create!(user_id: demo.id, spot_id: a3.id, start_date: date3s, end_date: date3e, num_guests: 1, total_price: 80)
Booking.create!(user_id: demo.id, spot_id: a4.id, start_date: date4s, end_date: date4e, num_guests: 1, total_price: 20)
Booking.create!(user_id: demo.id, spot_id: a5.id, start_date: date5s, end_date: date5e, num_guests: 1, total_price: 60)
Booking.create!(user_id: demo.id, spot_id: a6.id, start_date: date6s, end_date: date6e, num_guests: 1, total_price: 180)
Booking.create!(user_id: demo.id, spot_id: a7.id, start_date: date7s, end_date: date7e, num_guests: 1, total_price: 100)
Booking.create!(user_id: demo.id, spot_id: a8.id, start_date: date8s, end_date: date8e, num_guests: 1, total_price: 150)
Booking.create!(user_id: demo.id, spot_id: a9.id, start_date: date9s, end_date: date9e, num_guests: 1, total_price: 200)
Booking.create!(user_id: demo.id, spot_id: a10.id, start_date: date10s, end_date: date10e, num_guests: 1, total_price: 500)

Review.create!(title: 'Exquisite Place', body: 'The host went out of his way to help us during our stay, and the campground was charming.', rating: 5, spot_id: a1.id, user_id: dtaurasi.id)
Review.create!(title: 'Worst Vacation Ever', body: 'Your place is even worse than your ball game, and I didn\'t even know that was possible.', rating: 2, spot_id: a2.id, user_id: zwill.id)

Review.create!(title: 'Refreshing Spot', body: 'I didn\'t expect much from Mississippi, but the Jaunty Jungle was just what I needed after a stressful month shooting my new movie.', rating: 4, spot_id: a2.id, user_id: ewatson.id)

Review.create!(title: 'Amazing Ocean Camping Place', body: 'Never been to a beach camping spot before, but Baffling Bay Beach was amazing. Serene location with a small and clean beach and the peaceful ocean.', rating: 5, spot_id: a3.id, user_id: ocolman.id)


Review.create!(title: 'I Want a Refund', body: 'There was bugs everywhere in this campground. Worst experience I ever had. I am still on the phone with the owner to get my money back.', rating: 1, spot_id: a4.id, user_id: jbrown.id)
Review.create!(title: 'You Better Run', body: 'I don\'t know who you are, I don\'t know what you want, but I will find you and we will have a chat about this place.', rating: 1, spot_id: a4.id, user_id: lneeson.id)


Review.create!(title: 'Lovely Old House', body: 'Just what I needed for this trip to Austin, a reliable and affordable accomodation. We were able to fit a tent in the backyard.', rating: 5, spot_id: a5.id, user_id: ocolman.id)

Review.create!(title: 'Satisfactory Visit', body: 'The mansion is definitely \'Marvelous\'. I enjoyed the stay a lot, and the host even gave us a refund for some of the activities we opted out of.', rating: 4, spot_id: a6.id, user_id: lneeson.id)

Review.create!(title: 'Best Camping Spot Ever', body: 'Our RV got stolen but we partied like hell until 6AM so it was worth it.', rating: 4, spot_id: a7.id, user_id: jbrown.id)
Review.create!(title: 'Experience of a Lifetime', body: 'Experience of a lifetime, everyone should check out Rave Ranch. I am 60% sure I met Bon Jovi.', rating: 5, spot_id: a7.id, user_id: zwill.id)

Review.create!(title: 'Don\'t Consider This Place!', body: 'Note to self, never get hyped after watching Michael Jackson\'s thriller. What is the point of this place?', rating: 1, spot_id: a8.id, user_id: ewatson.id)

Review.create!(title: 'Not Bombastic At All', body: 'None of what was advertised (activities, amenities, etc...) could be found. Worst camping place I have ever been to.', rating: 2, spot_id: a9.id, user_id: dwashington.id)

Review.create!(title: 'Best Glamping Spot in Georgia', body: 'Everything was satisfactory. Diana (the owner) asked me to leave a review so here I am. Good job Diana.', rating: 4, spot_id: a10.id, user_id: dwashington.id)


end