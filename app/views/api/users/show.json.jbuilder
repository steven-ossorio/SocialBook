json.user do
  json.id @user.id
  json.email @user.email
  json.firstName @user.first_name
  json.lastName @user.last_name
  json.dob @user.dob
  json.sex @user.sex
  json.image_url asset_path(@user.image.url)
  json.cover_image_url asset_path(@user.cover_image.url)
  json.postsIds(@user.posts.pluck(:id))
  json.friendIds @user.friends.pluck(:id)
end
json.friends @user.friends


json.posts do
  @user.posts.each do |post|
    json.set! post.id, post
  end
end
json.friend_requests @user.friend_requests
# different post methods for feed and profile
