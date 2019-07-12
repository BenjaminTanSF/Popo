json.extract! contact, :id, :email, :name, :phone_number, :cell_number, :company_id
json.owner_first_name contact.owner.first_name
json.owner_last_name contact.owner.last_name
json.photoUrl url_for(contact.photo)
