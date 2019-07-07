json.extract! user, :id, :username, :first_name, :last_name
json.photoUrl url_for(user.photo)