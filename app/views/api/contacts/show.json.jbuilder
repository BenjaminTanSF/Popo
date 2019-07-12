  json.set! @contact.id do
    json.partial! 'api/contacts/contact', contact: @contact
  end