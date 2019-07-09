# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  position        :string           not null
#  supervisor_id   :integer
#  org_id          :integer          not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  # credit: https://stackoverflow.com/questions/5123972/ruby-on-rails-password-validation
  # PASSWORD_FORMAT = /\A
  #   (?=.{8,})          # Must contain 8 or more characters
  #   (?=.*\d)           # Must contain a digit
  #   (?=.*[a-z])        # Must contain a lower case character
  #   (?=.*[A-Z])        # Must contain an upper case character
  #   (?=.*[[:^alnum:]]) # Must contain a symbol
  # /x

  attr_reader :password

  validates :username, :password_digest, :email, :first_name, :last_name, :position, :org_id, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :ensure_photo
  # validates :supervisor_id, presence: { allow_nil: true }
  # validate :ensure_supervisor
  # validates :password, format: { with: PASSWORD_FORMAT }, allow_nil: true

  has_one_attached :photo

  belongs_to :supervisor, optional: true,
    foreign_key: :supervisor_id,
    class_name: :User

  has_many :subordinates,
    foreign_key: :supervisor_id,
    class_name: :User

  belongs_to :organization,
    foreign_key: :org_id,
    class_name: :Account

  has_many :accounts,
    foreign_key: :owner_id,
    class_name: :Account

  has_many :supervising_accounts,
    through: :subordinates,
    source: :accounts

  after_initialize :ensure_session_token
  after_initialize :ensure_supervisor

  def ensure_supervisor
    if self.supervisor_id.nil?
      self.supervisor_id = self.id
    end
  end

  def ensure_photo
    if !self.photo.attached?
      self.photo.attach(io: File.open('app/assets/images/user-thumbnail.png'), filename: 'profile.png', content_type: 'image/png')
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.correct_password?(password) ? user : nil
  end

  def correct_password?(password)
    password_obj = BCrypt::Password.new(self.password_digest)
    password_obj.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
