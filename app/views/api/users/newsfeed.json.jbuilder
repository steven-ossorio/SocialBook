json.newsfeed @posts.each do |post|
  json.extract! post.owner, :first_name, :last_name, :image
  json.id post.id
  json.owner post.owner_id
  json.created_at post.created_at
  json.text post.text
  json.profile_id post.profile_id
  json.likes do
    json.set! post.id do
      json.array post.likes.map(&:liker_id)
    end
  end
  json.comments do
    json.array! post.comments.each do |comment|
      json.user do
        json.extract! comment.user, :id, :first_name, :last_name, :image
      end
      json.id comment.id
      json.created_at comment.created_at
      json.text comment.text
    end
  end
end
