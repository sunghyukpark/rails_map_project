class User < ActiveRecord::Base
  has_secure_password

  has_many :directions

  validates :username, { presence: true,
                         uniqueness: { case_sensitive: true, message: "Same Username exists" },
                         length: { minimum: 3, message: "Username should be longer than 3 characters" },
                         format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/, message: "Must be in Email form"}
                       }

end
