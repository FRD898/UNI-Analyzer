#from app import db
from flask_pymongo import PyMongo
from database import mongo


def insertUser():
    try:
        mongo.db.users.insert_one({'email': "fachicc@uni.pe", 'password': "admin"})
    except:
        print("error in insertUser")

def authenticate(email,password):
    try:
        res=mongo.db.users.find({'email':email, 'password':password})
        #print(len(res))
        for entry in res:
            print(entry)
    except:
        print("error in authenticate")