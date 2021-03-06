require 'bcrypt'
class User < ApplicationRecord
    attr_reader :password

    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :fname, :lname, :zip_code, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    has_many(:spots,
        foreign_key: :host_id,
        class_name: :Spot)

    has_many(:bookings,
        foreign_key: :user_id,
        class_name: :Booking)

    has_many(:reviews,
        foreign_key: :user_id,
        class_name: :Review)

    has_many_attached :profile_photo

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
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