json.id @user.id
json.email @user.email
json.firstName @user.first_name
json.lastName @user.last_name
json.dob @user.dob
json.sex @user.sex
json.image_url asset_path(@user.image.url)
json.cover_image_url asset_path(@user.cover_image.url)
json.postsId(@user.posts) do |post|
  json.id post.id
end
json.posts @user.posts
# different post methods for feed and profile
