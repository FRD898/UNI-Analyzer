from flask import jsonify,request
from models.models import createNewUser

def createUser():
    res = createNewUser()
    return  jsonify("correct")