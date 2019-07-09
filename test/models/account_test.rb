# == Schema Information
#
# Table name: accounts
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  website            :string
#  phone_number       :string
#  industry           :string           not null
#  employees          :string
#  is_org             :boolean          default(FALSE), not null
#  annual_revenue_mil :integer
#  owner_id           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class AccountTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
