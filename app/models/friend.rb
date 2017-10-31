class Friend < ApplicationRecord

  belongs_to :user,
  primary_key: :id,
  foreign_key: :friender_id,
  class_name: :User

  belongs_to :friend,
  primary_key: :id,
  foreign_key: :friendee_id,
  class_name: :User

end
