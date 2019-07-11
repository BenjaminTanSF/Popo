  json.set! @account.id do
    json.partial! 'api/accounts/account', account: @account
  end