# == Schema Information
#
# Table name: contacts
#
#  id           :bigint           not null, primary key
#  email        :string           not null
#  first_name   :string           not null
#  last_name    :string           not null
#  phone_number :string
#  cell_number  :string
#  company_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
