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
  json.profilePostsId @user.profile_posts.pluck(:id)
end
# json.friends @user.friends

json.posts do
  @user.profile_posts.each do |post|
    json.set! post.id do
      json.extract! post.owner, :first_name, :last_name, :image
      json.id post.id
      json.created_at post.created_at
      json.text post.text
      json.profile_id post.profile_id
    end
  end
end

json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :first_name, :last_name, :image
    end
  end
end

# json.profilePosts do
#   @user.profile_posts.each do |post|
#     json.set! post.id, post
#   end
# end
# json.friend_requests @user.friend_requests
# different post methods for feed and profile
