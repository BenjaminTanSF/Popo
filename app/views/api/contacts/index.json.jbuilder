@contacts.each do |contact|
  json.set! contact.id do
    json.partial! 'api/contacts/contact', contact: contact
  end
end