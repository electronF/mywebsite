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


class ArticlesAuthors(db.Model):
    __bind_key__ = "articlesauthors"
    __tablename__ = "articlesauthors"

    id = Column(String, primary_key=True)
    author_id = Column(String, ForeignKey("authors.id"))
    article_id = Column(String, ForeignKey("articles.id"))
    

    def __repr__(self) -> str:
        return """AuthorsArticles(author_id={}, article_id='{}')""".format(
            self.author_id, self.article_id)


class ArticlesAuthorsSchema(ma.SQLAlchemySchema):
    class Meta:
        model = ArticlesAuthors
        load_instance = True #Optional: deserialize to model instance
    
    # id = auto_field()
    author_id = auto_field()
    article_id = auto_field()
    