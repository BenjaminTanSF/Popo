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

class Account < ApplicationRecord
  validates :name, :industry, presence: true
  validates :is_org, inclusion: [true, false]
  
  belongs_to :owner, optional: true,
    foreign_key: :owner_id,
    class_name: :User

  has_many :users,
    foreign_key: :org_id,
    class_name: :User

  has_one :supervisor,
    through: :owner,
    source: :supervisor

end
