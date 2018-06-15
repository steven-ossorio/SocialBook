# json.id @post.id
# json.text @post.text
#
# json.posts do
#   @user.profile_posts.each do |post|
    # json.set! @post.id do
json.extract! @post.owner, :first_name, :last_name, :image
json.id @post.id
json.owner @post.owner_id
json.created_at @post.created_at
json.text @post.text
json.profile_id @post.profile_id
json.comments @post.comments
    # end
  # end
# end
