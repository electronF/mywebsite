import os
import connexion
from tornado_sqlalchemy import SQLAlchemy
from flask_marshmallow  import Marshmallow

from .constants import (
    DATABASE_API, 
    DATABASE_HOST, 
    DATABASE_NAME, 
    DATABASE_PASSWORD, 
    DATABASE_PORT, 
    DATABASE_USERNAME)


rootdir = os.path.abspath(os.path.join(os.path.dirname(__file__), "controllers"))
basedir = os.path.abspath(os.path.dirname(__file__))

# Create the connexion application instance
connex_app = connexion.App(__name__, specification_dir=rootdir)

# Get the underlying Flask app instance
app = connex_app.app

# Build the Postgres URL for SqlAlchemy
DATABASE_PATH = os.path.join(basedir, DATABASE_NAME)
postgres_url = "postgresql+{0}://{1}:{2}@{3}:{4}/{5}".format(
                                                                DATABASE_API, 
                                                                DATABASE_USERNAME, 
                                                                DATABASE_PASSWORD, 
                                                                DATABASE_HOST, 
                                                                DATABASE_PORT, 
                                                                DATABASE_NAME
                                                            )

# Configure the SqlAlchemy part of the app instance
app.config["SQLALCHEMY_ECHO"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = postgres_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Create the SqlAlchemy db instance
db = SQLAlchemy(app)

# Initialize Marshmallow
ma = Marshmallow(app)

print(db, ma)