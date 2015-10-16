class User < ActiveRecord::Base
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         validates :username,
                   :presence => true,
                   :uniqueness => {:case_sensitive => false}

        has_many :favorites
        has_many :favorite_articles,class_name:"Article", through: :favorites
        has_many :articles
        has_many :invites


end
