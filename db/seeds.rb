# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all

  demo_user = {
    'username' => 'demoawesomeanimation',
    'password' => 'passwordpassword',
    'email' => 'demogod@test.net',
    'first_name' => 'Filet',
    'last_name' => 'Minyon',
    'position' => 'CEO',
    'org_id' => '1'
  }

  User.create!(demo_user)
end