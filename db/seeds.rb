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

user1 = User.create!(email: 'jbrown@gmail.com', password: 'jbrown123', fname: 'Jaylen', lname: 'Brown', zip_code: 11215)
user2 = User.create!(email: 'zwill@gmail.com', password: 'zwill123', fname: 'Zion', lname: 'Williamson', zip_code: 11215)
user3 = User.create!(email: 'dtaurasi@gmail.com', password: 'pass123', fname: 'Diana', lname: 'Taurasi', zip_code: 11215)
demo = User.create!(email: 'demouser@demoemail.com', password: 'demopass123', fname: 'John', lname: 'Doe', zip_code: 11213)

user1.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/5602.png'), filename:'5602.png');
user2.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/6163.png'), filename:'6163.png');
user3.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/DianaTaurasi2017headshot.png'), filename:'DianaTaurasi2017headshot.png');
demo.profile_photo.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/anon.png'), filename:'anon.png');

a1 = Spot.create!(name: 'Red Rock Retreat', price: 100, city:'Golden', state: 'Colorado', latitude: 39.7555, longitude: -105.2211, category: 'RVs', host_id: user1.id, image_url: 'https://d2umhuunwbec1r.cloudfront.net/gallery/parks/default-features/featureTwo/red-rock.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv1.png'), filename:'rv1.png')
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv2.png'), filename:'rv2.png')
a1.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/red_rock/rv3.png'), filename:'rv3.png')

a2 = Spot.create!(name: 'Jaunty Jungle', price: 80, city:'Bolton', state: 'Mississippi', latitude: 32.3493, longitude: -90.4601, category: 'Camping', host_id: user1.id, image_url: 'https://images.squarespace-cdn.com/content/v1/5b76144bec4eb75f241168c2/1537938586141-1FIIXBP7ESPPFA97IIYO/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Jungle_House-surrounding-exotic-+fruit-forests?format=1500w', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle1.png'), filename:'jungle1.png')
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle2.png'), filename:'jungle2.png')
a2.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/jungle/jungle3.png'), filename:'jungle3.png')

a3 = Spot.create!(name: 'Baffling Bay Beach', price: 80, city:'San Simeon', state: 'California', latitude: 35.6440, longitude: -121.1893, category: 'Beach Camping', host_id: user1.id, image_url: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/03/Beach-Camping.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachfirst.jpg'), filename:'beachfirst.jpg')
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachsecond.jpg'), filename:'beachsecond.jpg')
a3.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/beachthird.jpg'), filename:'beachthird.jpg')

a4 = Spot.create!(name: 'Shady Shack', price: 20, city:'Austin', state: 'Texas', latitude: 30.305388, longitude: -97.759791, category: 'Camping', host_id: user2.id, image_url: 'https://cdn.carrot.com/uploads/sites/19301/2020/03/rundown-house-ts-300x197.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack1.png'), filename:'shack1.png')
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack2.png'), filename:'shack2.png')
a4.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/shack/shack3.png'), filename:'shack3.png')

a5 = Spot.create!(name: 'Reliable Residence', price: 60, city:'Austin', state: 'Texas', latitude: 30.179659, longitude: -97.991176, category: 'Camping', host_id: user2.id, image_url: 'https://houseofbrokersrealty.files.wordpress.com/2013/11/66.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence1.png'), filename:'residence1.png')
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence2.png'), filename:'residence2.png')
a5.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/residence/residence3.png'), filename:'residence3.png')

a6 = Spot.create!(name: 'Marvelous Mansion', price: 180, city:'Austin', state: 'Texas', latitude: 30.379035, longitude: -97.540192, category: 'Camping', host_id: user2.id, image_url: 'https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20180918-drakemansion.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion1.png'), filename:'mansion1.png')
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion2.png'), filename:'mansion2.png')
a6.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/mansion/mansion3.png'), filename:'mansion3.png')

a7 = Spot.create!(name: 'Rave Ranch', price: 100, city:'Iowa City', state: 'Iowa', latitude: 41.635423, longitude: -91.554952, category: 'RVs', host_id: user3.id, image_url: 'https://images.fineartamerica.com/images-medium-large-5/midwest-farm-tom-weisbrook.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldfirst.jpg'), filename:'fieldfirst.jpg')
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldsecond.jpg'), filename:'fieldsecond.jpg')
a7.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/beachandfield/fieldthird.jpg'), filename:'fieldthird.jpg')

a8 = Spot.create!(name: 'Ghost Graveyard', price: 150, city:'Seattle', state: 'Washington', latitude: 47.629955, longitude: -122.362360, category: 'Camping', host_id: user3.id, image_url: 'https://www.irishcentral.com/uploads/article/134961/cropped_graveyard___getty.jpg?t=1568620780', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy1.png'), filename:'gy1.png')
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy2.png'), filename:'gy2.png')
a8.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/gy/gy3.png'), filename:'gy3.png')

a9 = Spot.create!(name: 'Bombastic Bungalow', price: 200, city:'Portland', state: 'Oregon', latitude: 45.556535, longitude: -122.745964, category: 'Camping', host_id: user3.id, image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/70/e8/f0/palm-beach-bungalow-resort.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow1.png'), filename:'bungalow1.png')
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow2.png'), filename:'bungalow2.png')
a9.photos.attach(io: open('https://hiptrip-aa-seed.s3.amazonaws.com/bungalow/bungalow3.png'), filename:'bungalow3.png')

a10 = Spot.create!(name: 'Georgia Glamping', price: 500, city:'Atlanta', state: 'Georgia', latitude: 33.767346, longitude: -84.422487, category: 'Glamping', host_id: user3.id, image_url: 'https://www.glamping.com/static/media/uploads/property/Brush%20Creek%20Ranch/Brush%20Creek%20Ranch%20Yurt.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
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

Booking.create!(user_id: user1.id, spot_id: a4.id, start_date: date1, end_date: date2, num_guests: 1, total_price: 100)
Booking.create!(user_id: user1.id, spot_id: a10.id, start_date: date3, end_date: date4, num_guests: 2, total_price: 150)

Booking.create!(user_id: user3.id, spot_id: a1.id, start_date: date1, end_date: date2, num_guests: 2, total_price: 200)
Booking.create!(user_id: user3.id, spot_id: a2.id, start_date: date3, end_date: date4, num_guests: 1, total_price: 150)

date5 = DateTime.new(2019, 3, 5);
date6 = DateTime.new(2019, 3, 9);
date7 = DateTime.new(2020, 2, 2);
date8 = DateTime.new(2019, 2, 9);

Booking.create!(user_id: demo.id, spot_id: a7.id, start_date: date5, end_date: date6, num_guests: 2, total_price: 200)
Booking.create!(user_id: demo.id, spot_id: a2.id, start_date: date7, end_date: date8, num_guests: 1, total_price: 150)

Review.create!(title: 'Exquisite Place', body: 'The host went out of his way to help us during our stay, and the campground was charming.', rating: 5, spot_id: a1.id, user_id: user3.id)
Review.create!(title: 'Worst Vacation Ever', body: 'Your place is even worse than your ball game, and I didn\'t even know that was possible.', rating: 2, spot_id: a1.id, user_id: user2.id)

Review.create!(title: 'Worst Vacation Ever', body: 'Too much sand for my liking, it was OK overall.', rating: 3, spot_id: a3.id, user_id: demo.id)

Review.create!(title: 'Exquisite Place', body: 'There was bugs everywhere in this campground. Worst experience I ever had. I am still on the phone with the owner to get my money back.', rating: 1, spot_id: a4.id, user_id: user1.id)

Review.create!(title: 'Exquisite Place', body: 'Our RV got stolen but we partied like hell until 6AM so it worth it.', rating: 4, spot_id: a7.id, user_id: user1.id)
Review.create!(title: 'Exquisite Place', body: 'Experience of a lifetime, everyone should check out Rave Ranch. I am 60% sure I met Bon Jovi.', rating: 5, spot_id: a7.id, user_id: user2.id)

end