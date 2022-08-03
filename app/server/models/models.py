#from app import db
from database import mongo


def createNewUser():
    try:
        newUser  = {
            "user_name":"Freider Achic",
            "email":"fachicc@uni.pe",
            "password":"admin123",
            "classes":[]
            }
        res = mongo.db.users.insert_one(newUser)
        return res
    except:
        print("error in insertUser")

def authenticate(email,password):
    try:
        res=mongo.db.users.find_one({'email':email, 'password':password})
        return res
    except:
        print("error in authenticate")

def findStudent(student):
    pass

def updateUser(query, newData):
    try:
        res = mongo.db.users.update_one(query,newData)
        return res
    except:
        print("error updating user")