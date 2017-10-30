# json.users @users

@users.each do |user|
  json.set! spot.id do
    json.partial! 'user', user: user
  end
end
