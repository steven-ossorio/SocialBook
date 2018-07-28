require 'faker'
require 'forgery'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friend.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all

sex = ["male", "female"]

colleges = [
  "State University of New York at Buffalo",
  "Binghamton University",
  "Stony Brook University",
  "University at Albany, State University of New York",
  "SUNY Technology Colleges",
  "Alfred State College",
  "State University of New York at Canton",
  "State University of New York at Cobleskill",
  "State University of New York at Delhi",
  "State University of New York at Farmingdale",
  "State University of New York at Morrisville",
  "State University of New York Polytechnic Institute, Marcy",
  "State University of New York Maritime College",
  "SUNY Comprehensive Colleges",
  "Buffalo State College",
  "Empire State College, Saratoga Springs",
  "State University of New York at Brockport",
  "State University of New York at Cortland",
  "State University of New York at Fredonia",
  "State University of New York at Geneseo",
  "State University of New York at New Paltz",
  "State University of New York at Old Westbury",
  "State University of New York at Oneonta",
  "State University of New York at Oswego",
  "State University of New York at Plattsburgh",
  "State University of New York at Potsdam",
  "Crane School of Music",
  "State University of New York at Purchase",
  "SUNY Specialized Doctoral Granting Units",
  "State University of New York Downstate Medical Center",
  "State University of New York Upstate Medical University",
  "State University of New York College of Environmental Science and Forestry",
  "State University of New York State College of Optometry"
]

majors = [
  "Accounting",
  "Architectural Engineering",
  "Architecture",
  "Art History",
  "Biochemistry",
  "Bioengineering",
  "Biology",
  "Biophysics",
  "Biotechnology",
  "Business Administration and Management",
  "Business Logistics",
  "Chemical Engineering",
  "Computer Engineering",
  "Computer Science",
  "Crime, Law, and Justice",
  "Economics",
  "Electrical Engineering",
  "Elementary and Kindergarten Education",
  "Engineering Science",
  "English",
  "Environmental Systems Engineering",
  "Geography",
  "Geosciences",
  "Graphic Design and Photography",
  "Health and Physical Education",
  "Health Policy and Administration",
  "Industrial Engineering",
  "Information Sciences and Technology",
  "Journalism",
  "Mathematics",
  "Mechanical Engineering",
  "Media Studies",
  "Meteorology",
  "Microbiology",
  "Mineral Economics",
  "Modern Languages",
  "Music Education",
  "Nuclear Engineering",
  "Nursing",
  "Nutrition",
  "Philosophy",
  "Physics",
  "Physiology",
  "Political Science",
  "Pre-medicine",
  "Psychology",
  "Secondary Education",
  "Sociology"
]

profile_images = [
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/Leia.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/Jeff_Dunham.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cool-people.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/joker.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/jk-rowling.jpg"
]

cover_images = [
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover1.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover2.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover3.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover4.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover6.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover7.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover8.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover9.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover11.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover12.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover13.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/cover14.jpg",
  "https://s3.amazonaws.com/socialbook-dev/users/cover_images/000/000/001/joker_cover.jpg"
]

collection_of_created_users_id = []
collection_of_post_ids = []


my_profile = User.create!(
  email: 'steven@steven.com',
  password: 'steven',
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  sex: sex.sample,
  dob: "Oct 20 1999",
  image: profile_images.sample,
  cover_image: cover_images.sample,
  home_location: Forgery('address').city + ", " + Forgery('address').country,
  current_location: Forgery('address').city + ", " + Forgery('address').country,
  major: majors.sample,
  education: colleges.sample
)

collection_of_created_users_id.push(my_profile.id)

100.times do |user|
  created_user = User.create!(
    email: Faker::Internet.email,
    password: 'password',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    sex: sex.sample,
    dob: "Oct 20 1999",
    image: profile_images.sample,
    cover_image: cover_images.sample,
    home_location: Forgery('address').city + ", " + Forgery('address').country,
    current_location: Forgery('address').city + ", " + Forgery('address').country,
    major: majors.sample,
    education: colleges.sample
  )

  collection_of_created_users_id.push(created_user.id)
end

no_dublicates = {}
status = ["Accepted", "Pending"]

500.times do |friend|
  logged_in_user = collection_of_created_users_id.sample
  added_user = collection_of_created_users_id.sample

  no_dublicates[logged_in_user] = [] unless no_dublicates[logged_in_user]

  if no_dublicates[logged_in_user].count === 60
    logged_in_user = collection_of_created_users_id.sample
  end

  until logged_in_user != added_user && !no_dublicates[logged_in_user].include?(added_user)
    added_user = collection_of_created_users_id.sample
  end

  if no_dublicates[logged_in_user]
    no_dublicates[logged_in_user].push(added_user)
  end


  Friend.create!(
    friender_id: logged_in_user,
    friendee_id: added_user,
    status: status.sample,
  )
end

collection_of_created_post_id = [];

1000.times do |post|
  owner = collection_of_created_users_id.sample
  profile_id = collection_of_created_users_id.sample
  quote = []
  quote.push(Faker::HarryPotter.quote)
  quote.push(Faker::RickAndMorty.quote)

  post = Post.create!(
    owner_id: owner,
    profile_id: profile_id,
    text: quote.sample
  )

  collection_of_created_post_id.push(post.id)
end

collection_of_created_comment_id = [];

1000.times do |comment|
  owner_id = collection_of_created_users_id.sample
  post_id = collection_of_created_post_id.sample
  quote = []
  quote.push(Faker::HarryPotter.quote)
  quote.push(Faker::RickAndMorty.quote)

  comment = Comment.create!(
    user_id:  owner_id,
    post_id:  post_id,
    text: quote.sample
  )

  collection_of_created_comment_id.push(comment.id)
end

1000.times do |like|
  owner_id = collection_of_created_users_id.sample
  post_id = collection_of_created_post_id.sample

  Like.create!(
    liker_id: owner_id,
    liked_id: post_id
  )
end
