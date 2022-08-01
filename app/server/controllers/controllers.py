from flask import jsonify,request
from models.models import authenticate
def home():
    return jsonify("Home route")

def userLogin():
    headers = request.headers
    res = authenticate(headers['email'],headers['password'])
    if res != None:
        return jsonify({'status':200,'response':"success"})
    else:
        return jsonify({'status':404,'response':"user not found"})