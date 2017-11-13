# json.users @users

# @users.each do |user|
#   json.set! spot.id do
#     json.partial! 'user', user: user
#   end
# end

json.id @user.id
json.email @user.email
json.firstName @user.first_name
json.image_url asset_path(@user.image.url)
json.cover_image_url asset_path(@user.cover_image.url)
json.posts(@user.posts) do |post|
  json.id post.id
end

# json.newFeed @user.all_posts(@user.id)
