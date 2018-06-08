class Post < ApplicationRecord
  validates :text, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment

end
