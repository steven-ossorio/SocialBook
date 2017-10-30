@posts.each do |post|
  json.set! post.id do
    json.id post.id
    # json.owner_id post.owner_id
    json.created_at post.created_at
    json.text post.text
  end
end
