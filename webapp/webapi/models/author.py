from datetime import datetime

from sqlalchemy import (
    Column,
    String, 
    DateTime
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma


class Author(db.Model):
    __bind_key__ = "drivers"
    __tablename__ = "drivers"
    id = Column(String, primary_key=True)
    surname = Column(String)
    name = Column(String) #nullable=True
    #add constraint here available gender are: MALE, FEMALE, OTHER
    gender = Column(String)
    #add constraint to check email validity
    email = Column(String)
    about_me = Column(String)
    #add constraint here available state are: ACTIVE, UNACTIVE, DELETE, FREEZE 
    account_status = Column(String, default='UNACTIVE') 
    register_at = Column(
                    DateTime, 
                    nullable = True,
                    default = datetime.utcnow, 
                    onupdate = datetime.utcnow,
                )

    def __repr__(self) -> str:
        return """Author(
            id={}, surname='{}', name='{}',
            gender={}, email='{}', account_state={},
            register_at={} 
            )""".format(
            self.id, self.surname, self.name,
            self.gender, self.email, self.account_status,
            self.register_at
        )


class AuthorSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Author
        load_instance = True #Optional: deserialize to model instance
    id = auto_field()
    surname = auto_field()
    name = auto_field()
    gender = auto_field()
    email = auto_field()
    about_me = auto_field()
    account_status = auto_field()
    register_at = auto_field()
