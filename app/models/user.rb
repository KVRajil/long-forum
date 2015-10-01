class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         validates :username,
         :presence => true,
         :uniqueness => {
           :case_sensitive => false
         }

        has_many :evaluations, class_name: "RSEvaluation", as: :source
        has_many :favorites
        has_many :favorite_articles,class_name:"Article", through: :favorites
        has_many :articles

        has_reputation :votes, source: {reputation: :votes, of: :comments}, aggregated_by: :sum

        def voted_for?(comment)
          evaluations.where(target_type: comment.class, target_id: comment.id).present?
        end
        has_reputation :votes, source: {reputation: :votes, of: :articles}, aggregated_by: :sum
        def voted_for?(article)
              evaluations.where(target_type: article.class, target_id: article.id).present?
        end

end
