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
#  is_org             :boolean          not null
#  annual_revenue_mil :integer
#  owner_id           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Account < ApplicationRecord
  validates :name, :industry, presence: true
  validate :ensure_logo
  has_one_attached :logo
  
  def ensure_logo
    if !self.logo.attached?
      self.logo.attach(io: File.open('app/assets/images/default-logo.png'), filename: 'default-logo.png', content_type: 'image/png')
    end
  end
  
  belongs_to :owner, optional: true,
    foreign_key: :owner_id,
    class_name: :User

  has_many :users,
    foreign_key: :org_id,
    class_name: :User

  has_one :supervisor,
    through: :owner,
    source: :supervisor

  has_many :contacts,
    foreign_key: :company_id,
    class_name: :Contact
end
