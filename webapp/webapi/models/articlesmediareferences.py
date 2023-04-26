from datetime import datetime

from sqlalchemy import (
    Column, 
    String,
    Integer,
    Date,
    ForeignKey
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class ArticlesMediaReferences(db.Model):
    __bind_key__ = "articlesmediareferences"
    __tablename__ = "articlesmediareferences"

    id = Column(String, primary_key=True, nullable=False)
    article_media_id = Column(Integer, ForeignKey("articlesmedia.id"))
    # article_id = Column(Integer, ForeignKey("articles.id"))
    name = Column(String, nullable=False)
    authors = Column(Integer, nullable=False)
    edition = Column(String, nullable=True)
    institution = Column(String, nullable=True)
    publish_at = Column(Date,  nullable=False)
    index = Column(Integer, nullable=False)
    

    def __repr__(self) -> str:
        return """ArticlesMediaReferences(
            id={}, article_media_id = {}, name='{}', authors={},
             edition={}, institution={}, publish_at={},
            index={}
        )""".format(
            self.id, self.article_media_id,
            self.name, self.authors, self.edition,
            self.institution, self.publish_at, self.index)


class ArticlesMediaReferencesSchema(ma.SQLAlchemySchema):
    class Meta:
        model = ArticlesMediaReferences
        load_instance = True #Optional: deserialize to model instance
    
    id = auto_field()
    article_media_id = auto_field()
    # article_id = auto_field()
    name = auto_field()
    authors = auto_field()
    edition = auto_field()
    institution = auto_field()
    publish_at = auto_field()
    index = auto_field()
    