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


class AuthorsArticles(db.Model):
    __bind_key__ = "authorsarticles"
    __tablename__ = "authorsarticles"

    author_id = Column(String, ForeignKey("authors.id"))
    article_id = Column(String, ForeignKey("articles.id"))
    

    def __repr__(self) -> str:
        return """AuthorsArticles(author_id={}, article_id='{}')""".format(
            self.author_id, self.article_id)


class CategorySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Category
        load_instance = True #Optional: deserialize to model instance
    
    author_id = auto_field()
    article_id = auto_field()
    