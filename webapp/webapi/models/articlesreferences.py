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


class ArticlesReferences(db.Model):
    __bind_key__ = "articlesreferences"
    __tablename__ = "articlesreferences"

    id = Column(String, primary_key=True)
    article_id = Column(String, ForeignKey("articles.id"))
    name = Column(String, nullable=False)
    authors = Column(String, nullable=False)
    edition = Column(String, nullable=True)
    institution = Column(String, nullable=True)
    type = Column(String, nullable=False)
    publish_at = Column(Date, nullable=False)
    

    def __repr__(self) -> str:
        return """ArticlesReferences(id={}, article_id={}, name='{}', 
        authors={}, edition={}, institution={}, 
        type={}, publish_at={})""".format(
            self.id, self.article_id, self.name,
            self.authors, self.edition, self.institution,
            self.type, self.publish_at)


class ArticlesReferencesSchema(ma.SQLAlchemySchema):
    class Meta:
        model = ArticlesReferences
        load_instance = True #Optional: deserialize to model instance
    
    id = auto_field()
    article_id = auto_field()
    name = auto_field()
    authors = auto_field()
    edition = auto_field()
    institution = auto_field()
    type = auto_field()
    publish_at = auto_field()
    