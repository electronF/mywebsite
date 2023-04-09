from datetime import datetime

from sqlalchemy import (
    Boolean,
    Column, 
    String,
    ForeignKey
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class ArticlesCoversImages(db.Model):
    __bind_key__ = "articlescoversimages"
    __tablename__ = "articlescoversimages"

    id = Column(String, primary_key=True)
    article_id = Column(String, ForeignKey("articles.id"))
    import_path = Column(String)
    is_used = Column(Boolean)

    def __repr__(self) -> str:
        return """ArticlesCoversImages(id={}, article_id={}, import_path={}, id_used='{}')""".format(
            self.id, self.article_id, self.import_path, self.is_used)


class CategorySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Category
        load_instance = True #Optional: deserialize to model instance
    
    id = auto_field()
    article_id = auto_field()
    import_path = auto_field()
    is_used = auto_field()
