require 'faker'
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

sex = ["male", "female"]

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

my_profile = User.create!(
  email: 'steven@steven.com',
  password: 'steven',
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  sex: sex.sample,
  dob: "Oct 20 1999",
  image: profile_images.sample,
  cover_image: cover_images.sample
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
    cover_image: cover_images.sample
  )

  collection_of_created_users_id.push(created_user.id)
end

no_dublicates = {}
status = ["Accepted", "Pending"]

3000.times do |friend|
  logged_in_user = collection_of_created_users_id.sample
  added_user = collection_of_created_users_id.sample

  no_dublicates[logged_in_user] = [] unless no_dublicates[logged_in_user]

  if no_dublicates[logged_in_user].count === 40
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

1000.times do |post|
  owner = collection_of_created_users_id.sample
  profile_id = collection_of_created_users_id.sample
  quote = []
  quote.push(Faker::HarryPotter.quote)
  quote.push(Faker::RickAndMorty.quote)

  Post.create!(
    owner_id: owner,
    profile_id: profile_id,
    text: quote.sample
  )
end
