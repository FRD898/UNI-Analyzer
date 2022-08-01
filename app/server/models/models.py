#from app import db
from database import mongo


def createUser():
    try:
        mongo.db.users.insert_one({'email': "fachicc@uni.pe", 'password': "admin"})
    except:
        print("error in insertUser")

def authenticate(email,password):
    try:
        res=mongo.db.users.find_one({'email':email, 'password':password})
        return res
        
    except:
        print("error in authenticate")

def addNewStudent(student):
    try:
        res=mongo.db.students.insert_one(student)
    except:
        print("error in authenticate")