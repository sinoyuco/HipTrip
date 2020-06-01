require 'bcrypt'
class User < ApplicationRecord
    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :email, :password_digest, :session_token, presence: true
    validates :fname, :lname, :zip_code, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_crendetials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private
      def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end