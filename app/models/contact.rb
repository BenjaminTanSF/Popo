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

class Contact < ApplicationRecord
  validates :email, :name, :company_id, presence: true
  validate :ensure_photo

  has_one_attached :photo

  belongs_to :company,
    foreign_key: :company_id,
    class_name: :Account

  has_one :owner,
    through: :company,
    source: :owner

  has_one :supervisor,
    through: :company,
    source: :supervisor

  def ensure_photo
    if !self.photo.attached?
      self.photo.attach(io: File.open('app/assets/images/user-thumbnail.png'), filename: 'profile.png', content_type: 'image/png')
    end
  end
end
