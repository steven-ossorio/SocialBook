class Like < ApplicationRecord
  belongs_to :user,
  foreign_key: :liker_id,
  primary_key: :id,
  class_name: :User

  belongs_to :post,
  foreign_key: :liked_id,
  primary_key: :id,
  class_name: :Post
end
