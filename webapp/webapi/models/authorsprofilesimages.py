from datetime import datetime

from sqlalchemy import (
    Column, Boolean,
    String, DateTime,
    ForeignKey
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class AuthorsProfilesImages(db.Model):
    __bind_key__ = "authorsprofilesimages"
    __tablename__ = "authorsprofilesimages"

    id = Column(String, primary_key=True)
    author_id = Column(String, ForeignKey("authors.id"))
    import_path = Column(String)
    #Add constrainst available type are: BANNER, PROFILE
    type = Column(String)
    is_used = Column(Boolean)

    def __repr__(self) -> str:
        return """
        AuthorsProfilesImages(id={}, author_id='{}', import_path='{}', type='{}', is_used='{})
        """.format(
            self.id, self.author_id, self.import_path, self.import_path, self.type, self.is_used)


class AuthorsProfilesImagesSchema(ma.SQLAlchemySchema):
    class Meta:
        model = AuthorsProfilesImages
        load_instance = True #Optional: deserialize to model instance
    id = auto_field()
    author_id = auto_field()
    import_path = auto_field()
    type = auto_field()
    is_used = auto_field()
    