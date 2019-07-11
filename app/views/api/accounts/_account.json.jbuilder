json.extract! account, :id, :name, :website, :phone_number, :industry, :employees, :ein, :annual_revenue_mil, :owner_id, :sic_code, :catch_phrase, :ownership
json.first_name account.owner.first_name
json.last_name account.owner.last_name
json.logoUrl url_for(account.logo)