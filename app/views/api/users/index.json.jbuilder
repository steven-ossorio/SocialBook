json.id do
  json.id @user.id
end

json.user do
  json.id @user.id
  json.email @user.email
  json.firstName @user.first_name
  json.lastName @user.last_name
  json.dob @user.dob
  json.sex @user.sex
  json.image_url asset_path(@user.image.url)
  json.cover_image_url asset_path(@user.cover_image.url)
  # json.postsIds @user.posts.pluck(:id)
  json.friendIds @user.friends.pluck(:id)
  json.requests @user.requests.pluck(:friender_id)
  json.profilePostsId @user.profile_posts.pluck(:id)
end

json.requests @user.requests


# json.email @user.email
# json.firstName @user.first_name
# json.image_url asset_path(@user.image.url)
# json.cover_image_url asset_path(@user.cover_image.url)
# json.posts(@user.posts) do |post|
#   json.id post.id
# end
