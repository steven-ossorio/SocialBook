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
  json.current_location @user.current_location
  json.home_location @user.home_location
  json.school @user.education
  json.major @user.major
  # json.postsIds @user.posts.pluck(:id)
  json.friendIds @user.friends.pluck(:id)
  json.requests @user.requests.pluck(:friender_id)
  json.profilePostsId @user.profile_posts.pluck(:id)
end

json.requests do
  @user.requests.each do |requester|
    json.set! requester.id do
      json.extract! requester, :id, :first_name, :last_name, :image
    end
  end
end
