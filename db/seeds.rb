# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
file1 = File.open('/Users/sinanyucesan/Desktop/generic_spots/camp1.jpg')
file2 = File.open('/Users/sinanyucesan/Desktop/generic_spots/camp2.jpg')
file3 = File.open('/Users/sinanyucesan/Desktop/generic_spots/camp3.jpg')

# User.create!(email: 'jbrown@gmail.com', password: 'jbrown123', fname: 'Jaylen', lname: 'Brown', zip_code: 11215)
# User.create!(email: 'zwill@gmail.com', password: 'zwill123', fname: 'Zion', lname: 'Williamson', zip_code: 11215)
# User.create!(email: 'dtaurasi@gmail.com', password: 'pass123', fname: 'Diana', lname: 'Taurasi', zip_code: 11215)
# User.create!(email: 'demouser@demoemail.com', password: 'demopass123', fname: 'First', lname: 'Last', zip_code: 11213)

# a1 = Spot.create!(name: 'Red Rock Retreat', price: 100, city:'Golden', state: 'Colorado', latitude: 39.7555, longitude: 105.2211, category: 'RV Park', host_id: 18, image_url: 'https://d2umhuunwbec1r.cloudfront.net/gallery/parks/default-features/featureTwo/red-rock.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a1.photos.attach(io: file1, filename:'camp1.jpg')
# a1.photos.attach(io: file2, filename:'camp2.jpg')
# a1.photos.attach(io: file3, filename:'camp3.jpg')

# a2 = Spot.create!(name: 'Jivin Jungle Jumanja', price: 80, city:'Bolton', state: 'Mississippi', latitude: 32.3493, longitude: 90.4601, category: 'Tent Camping', host_id: 18, image_url: 'https://images.squarespace-cdn.com/content/v1/5b76144bec4eb75f241168c2/1537938586141-1FIIXBP7ESPPFA97IIYO/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Jungle_House-surrounding-exotic-+fruit-forests?format=1500w', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a2.photos.attach(io: file1, filename:'camp1.jpg')
# a2.photos.attach(io: file2, filename:'camp2.jpg')
# a2.photos.attach(io: file3, filename:'camp3.jpg')

# a3 = Spot.create!(name: 'Baffling Bay Beach', price: 80, city:'San Simeon', state: 'California', latitude: 35.6440, longitude: 121.1893, category: 'Tent Camping', host_id: 19, image_url: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/03/Beach-Camping.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a3.photos.attach(io: file1, filename:'camp1.jpg')
# a3.photos.attach(io: file2, filename:'camp2.jpg')
# a3.photos.attach(io: file3, filename:'camp3.jpg')

# a4 = Spot.create!(name: 'Nice Place', price: 20, city:'Austin', state: 'Texas', latitude: 39.7555, longitude: 105.2211, category: 'RV Park', host_id: 18, image_url: 'https://cdn.carrot.com/uploads/sites/19301/2020/03/rundown-house-ts-300x197.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a4.photos.attach(io: file1, filename:'camp1.jpg')
# a4.photos.attach(io: file2, filename:'camp2.jpg')
# a4.photos.attach(io: file3, filename:'camp3.jpg')

# a5 = Spot.create!(name: 'Nicer Place', price: 60, city:'Austin', state: 'Texas', latitude: 32.3493, longitude: 90.4601, category: 'Tent Camping', host_id: 18, image_url: 'https://houseofbrokersrealty.files.wordpress.com/2013/11/66.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a5.photos.attach(io: file1, filename:'camp1.jpg')
# a5.photos.attach(io: file2, filename:'camp2.jpg')
# a5.photos.attach(io: file3, filename:'camp3.jpg')

# a6 = Spot.create!(name: 'Nicest Place', price: 180, city:'San Antonio', state: 'Texas', latitude: 35.6440, longitude: 121.1893, category: 'Tent Camping', host_id: 19, image_url: 'https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20180918-drakemansion.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.webp', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a6.photos.attach(io: file1, filename:'camp1.jpg')
# a6.photos.attach(io: file2, filename:'camp2.jpg')
# a6.photos.attach(io: file3, filename:'camp3.jpg')

# a7 = Spot.create!(name: 'Rave Ranch', price: 100, city:'Iowa City', state: 'Iowa', latitude: 39.7555, longitude: 105.2211, category: 'RV Park', host_id: 18, image_url: 'https://images.fineartamerica.com/images-medium-large-5/midwest-farm-tom-weisbrook.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a7.photos.attach(io: file1, filename:'camp1.jpg')
# a7.photos.attach(io: file2, filename:'camp2.jpg')
# a7.photos.attach(io: file3, filename:'camp3.jpg')

# a8 = Spot.create!(name: 'Ghost Graveyard', price: 150, city:'Seattle', state: 'Washington', latitude: 32.3493, longitude: 90.4601, category: 'Tent Camping', host_id: 18, image_url: 'https://www.irishcentral.com/uploads/article/134961/cropped_graveyard___getty.jpg?t=1568620780', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a8.photos.attach(io: file1, filename:'camp1.jpg')
# a8.photos.attach(io: file2, filename:'camp2.jpg')
# a8.photos.attach(io: file3, filename:'camp3.jpg')

# a9 = Spot.create!(name: 'Bombastic Bungalow', price: 200, city:'Portland', state: 'Oregon', latitude: 35.6440, longitude: 121.1893, category: 'Tent Camping', host_id: 19, image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/70/e8/f0/palm-beach-bungalow-resort.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a9.photos.attach(io: file1, filename:'camp1.jpg')
# a9.photos.attach(io: file2, filename:'camp2.jpg')
# a9.photos.attach(io: file3, filename:'camp3.jpg')

# a10 = Spot.create!(name: 'Perilous Palace', price: 500, city:'Atlanta', state: 'Georgia', latitude: 39.7555, longitude: 105.2211, category: 'RV Park', host_id: 18, image_url: 'https://cdn.getyourguide.com/img/tour_img-3085250-148.jpg', description: 'The term camp comes from the Latin word campus, meaning \'field\'. Therefore, a campground consists typically of open pieces of ground where a camper can pitch a tent or park a camper. More specifically a campsite is a dedicated area set aside for camping and for which often a user fee is charged. Campsites typically feature a few (but sometimes no) improvements.')
# a10.photos.attach(io: file1, filename:'camp1.jpg')
# a10.photos.attach(io: file2, filename:'camp2.jpg')
# a10.photos.attach(io: file3, filename:'camp3.jpg')