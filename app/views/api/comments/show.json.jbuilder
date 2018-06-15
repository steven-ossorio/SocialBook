json.comment do
  json.id @comment.id
  json.text @comment.text
  json.postId @comment.post_id
  json.user do
    json.extract! @comment.user, :id, :first_name, :last_name, :image
  end
end
