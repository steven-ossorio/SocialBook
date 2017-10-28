@posts.each do |post|
  json.set! post.id do
    # json.id post.id
    # json.owner_id post.owner_id
    json.text post.text
  end
end
