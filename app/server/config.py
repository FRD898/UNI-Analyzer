import os
SECRET_KEY = os.urandom(32)
# Grabs the folder where the script runs.
basedir = os.path.abspath(os.path.dirname(__file__))
#MONGODB_HOST = ""
# Enable debug mode.
DEBUG = True
MONGO_URI = "mongodb+srv://freider:mongodbXD321@analyzer.gnwsmmv.mongodb.net/UNI-ANALYZER?retryWrites=true&w=majority"
# Connect to the database
#SQLALCHEMY_DATABASE_URI = 'your psycopg2 URI connection'
# Turn off the Flask-SQLAlchemy event system and warning
#SQLALCHEMY_TRACK_MODIFICATIONS = False



