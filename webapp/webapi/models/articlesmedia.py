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


class ArticlesMedia(db.Model):
    __bind_key__ = "articlesmedia"
    __tablename__ = "articlesmedia"

    id = Column(String, primary_key=True)
    article_id = Column(String, ForeignKey("articles.id"))
    type = Column(String)
    import_path = Column(String)
    

    def __repr__(self) -> str:
        return """ArticlesMedia(id={}, article_id={}, type='{}', import_path={})""".format(
            self.id, self.article_id, self.type, self.import_path)


class  ArticlesMediaSchema(ma.SQLAlchemySchema):
    class Meta:
        model = ArticlesMedia
        load_instance = True #Optional: deserialize to model instance
    
    id = auto_field()
    article_id = auto_field()
    type = auto_field()
    import_path = auto_field()
    