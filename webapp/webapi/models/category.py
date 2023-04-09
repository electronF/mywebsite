from datetime import datetime

from sqlalchemy import (
    Column,
    String
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class Category(db.Model):
    __bind_key__ = "categories"
    __tablename__ = "categories"

    id = Column(String, primary_key=True)
    #Add constraint on name size
    name = Column(String)
    description = Column(String)
    

    def __repr__(self) -> str:
        return """Category(id={}, name='{}')""".format(
            self.id, self.name)


class CategorySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Category
        load_instance = True #Optional: deserialize to model instance
    id = auto_field()
    name = auto_field()
    description = auto_field()
    