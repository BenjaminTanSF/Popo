# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Account.destroy_all
  User.destroy_all
  Contact.destroy_all

  demo_account = Account.create!(
    'name' => 'POPO',
    'website' => 'https://popo-crm.herokuapp.com/',
    'phone_number' => Faker::PhoneNumber.phone_number,
    'industry' => Faker::Company.industry,
    'employees' => Faker::Number.between(50, 2000).to_s,
    'ein' => Faker::Company.ein,
    'catch_phrase' => Faker::Company.catch_phrase,
    'ownership' => Faker::Company.type,
    'is_org' => true,
    'sic_code' => Faker::Number.number(4).to_i,
    'annual_revenue_mil' => Faker::Number.number(3).to_i
  )

  demo_user = User.create!(
    'username' => 'demoawesomeanimation',
    'password' => 'passwordpassword',
    'email' => 'demogod@test.net',
    'first_name' => 'Filet',
    'last_name' => 'Minyon',
    'position' => 'CEO',
    'org_id' => demo_account.id
  )

  demo_account.owner_id = demo_user.id
  demo_account.save!

  20.times do
    User.create!(
      'username' => Faker::Internet.unique.username,
      'password' => 'password',
      'email' => Faker::Internet.unique.free_email,
      'first_name' => Faker::Name.first_name,
      'last_name' => Faker::Name.last_name,
      'position' => Faker::Job.position,
      'org_id' => demo_account.id
    )
  end

  owner_ids = Array(User.first.id..User.last.id)

  500.times do
    Account.create!(
      'name' => Faker::Company.name,
      'website' => Faker::Internet.url,
      'phone_number' => Faker::PhoneNumber.phone_number,
      'industry' => Faker::Company.industry,
      'employees' => Faker::Number.between(50, 2000).to_s,
      'ein' => Faker::Company.ein,
      'catch_phrase' => Faker::Company.catch_phrase,
      'ownership' => Faker::Company.type,
      'is_org' => Faker::Boolean.boolean(0.01),
      'owner_id' => owner_ids.sample,
      'sic_code' => Faker::Number.number(4).to_i,
      'annual_revenue_mil' => Faker::Number.number(3).to_i
    )
  end
  
  account_ids = Array(Account.first.id..Account.last.id)

  100.times do
    Contact.create!(
      'email' => Faker::Internet.unique.free_email,
      'name' => Faker::FunnyName.two_word_name,
      'phone_number' => Faker::PhoneNumber.phone_number,
      'cell_number' => Faker::PhoneNumber.cell_phone,
      'company_id' => account_ids.sample
    )
  end
  
  sup_ids = Array(User.first.id..(User.first.id + 5))
  
  User.all.each do |usr|
    usr.update_attributes!(:supervisor_id => sup_ids.sample)
    rand_acc_id = account_ids.sample
    usr.update_attributes!(:org_id => rand_acc_id)
    rand_acc = Account.find(rand_acc_id)
    rand_acc.update_attributes!(:owner_id => usr.id)
  end

end
