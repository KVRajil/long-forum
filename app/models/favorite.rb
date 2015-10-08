class Favorite < ActiveRecord::Base
   belongs_to :article
   belongs_to :favorite_article,foreign_key:'article_id',class_name: "Article"
 end
