require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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

150.times do |user|
  User.create!(
    email: Faker::Internet.email,
    password: 'password',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    sex: sex.sample,
    dob: "Oct 20 1999",
    image: profile_images.sample,
    cover_image: cover_images.sample
  )
  
end
