from datetime import datetime

from sqlalchemy import (
    Column,
    String,
    DateTime,
    ForeignKey
)

from sqlalchemy.orm import (
    relationship, backref
)

from marshmallow_sqlalchemy import auto_field

from ..configs import db, ma

from .category import Category
from .author import Author


class Article(db.Model):
    __bind_key__ = "articles"
    __tablename__ = "articles"

    id = Column(String, primary_key=True)

    #Constraint must be at least 1 character and at most 250
    title = Column(String)

    #Constraint must be at least 50 character and at most 500
    description = Column(String) #nullable=True

    tags = Column(String)
    #Constraint must be at least 100 characters

    content = Column(String)
    #add constraint here available state are: active, fired, unactive 

    status = Column(String, default='active') 

    create_at = Column(
                    DateTime, 
                    default=datetime.utcnow, 
                    onupdate=datetime.utcnow
    )

    publish_at = Column(
                    DateTime, 
                    nullable = True
                )

    update_at = Column(
                    DateTime,
                    nullable = True 
                )
    
    
    # categories = relationship(
    #     "Category", 
    #     backref=backref("articles"),
    #     # cascade="all, delete, delete-orphan",
    #     # single_parent=True,
    #     order_by="desc(Category.name)"
    # )

    # authors = relationship(
    #     "Author", 
    #     backref=backref("authors"),
    #     # cascade="all, delete, delete-orphan",
    #     # single_parent=True,
    #     order_by="desc(Author.surname)"
    # )

    

    def __repr__(self) -> str:
        return """Article(
            id={}, title='{}', description='{}',
            tags={}, content='{}', status={}, create_at={},
            publish_at={}, update_at={}
            )""".format(
            self.id, self.title, self.description, 
            self.tags, self.content, self.status,
            self.create_at, self.publish_at, self.update_at
        )


class ArticleSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Article
        load_instance = True #Optional: deserialize to model instance
    id = auto_field()
    title = auto_field()
    description = auto_field()
    tags = auto_field()
    content = auto_field()
    status = auto_field()
    create_at = auto_field()
    publish_at = auto_field()
    update_at = auto_field()
    # categories = auto_field()
    # authors = auto_field()
 