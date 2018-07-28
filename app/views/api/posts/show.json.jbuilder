json.extract! @post.owner, :first_name, :last_name, :image
json.id @post.id
json.owner @post.owner_id
json.created_at @post.created_at
json.text @post.text
json.profile_id @post.profile_id
json.comments do
  json.array! @post.comments do |comment|
      json.id comment.id
      json.text comment.text
      json.postId comment.post_id
      json.user do
        json.extract! comment.user, :id, :first_name, :last_name, :image
      end
  end
end
json.likes do
    json.set! @post.id do
      json.array @post.likes.map(&:liker_id)
    end
  end