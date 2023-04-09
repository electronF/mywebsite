from datetime import datetime

from sqlalchemy import (
    Column, 
    String,
    ForeignKey
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class ArticlesCategories(db.Model):
    __bind_key__ = "articlescategories"
    __tablename__ = "articlescategories"

    article_id = Column(String, ForeignKey("articles.id"))
    category_id = Column(String, ForeignKey("categories.id"))
    

    def __repr__(self) -> str:
        return """ArticlesCategories(article_id={}, category_id='{}')""".format(
            self.article_id, self.category_id)


class CategorySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Category
        load_instance = True #Optional: deserialize to model instance
    
    article_id = auto_field()
    category_id = auto_field()
    