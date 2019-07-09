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

  demo_account = Account.create!(
    'name' => 'POPO',
    'website' => 'https://popo-crm.herokuapp.com/',
    'phone_number' => '800-123-4567',
    'industry' => 'finance',
    'employees' => Faker::Number.between(50, 2000).to_s,
    'is_org' => true,
    'annual_revenue_mil' => 50
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

  2000.times do
    Account.create!(
      'name' => Faker::Company.name,
      'website' => Faker::Internet.url,
      'phone_number' => Faker::PhoneNumber.phone_number_with_country_code,
      'industry' => Faker::Company.industry,
      'employees' => Faker::Number.between(50, 2000).to_s,
      'is_org' => Faker::Boolean.boolean(0.01),
      'owner_id' => owner_ids.sample,
      'logo' => Faker::Company.logo,
      'annual_revenue_mil' => Faker::Number.number(3).to_i
    )
  end
  
end

account_ids = Array(Account.first.id..Account.last.id)
account_ids.length.times do
  account_ids << nil
end

sup_ids = Array(User.first.id..(User.first.id + 5))

User.all.each do |usr|
  usr.update_attributes!(:supervisor_id => sup_ids.sample)
  rand_acc_id = account_ids.sample
  unless rand_acc_id.nil?
    usr.update_attributes!(:org_id => rand_acc_id)
    rand_acc = Account.find(rand_acc_id)
    rand_acc.update_attributes!(:owner_id => usr.id)
  end
end