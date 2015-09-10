class User < ActiveRecord::Base
	has_many :directions
	has_secure_password

  attr_accessible :email, :password, :password_confirmation

  validates :email, { presence: true,
                      uniqueness: { case_sensitive: true, message: "Same email exists" },
                      length: { minimum: 3, message: "Email should be longer than 3 characters" },
                      format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/, message: "Must be in Email form"}
                    }
                    
  def self.from_omniauth(auth_hash)
    user = find_or_create_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
    user.email = auth_hash['info']['email']
    user.image = auth_hash['info']['image']
    user.password_digest = auth_hash['uid']
    user.save!
    user
  end
end
