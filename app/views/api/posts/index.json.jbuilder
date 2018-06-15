@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.created_at post.created_at
    json.text post.text
    json.comments post.comments
  end
end
