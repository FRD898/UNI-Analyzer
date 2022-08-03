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

def getAllClassrooms():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        userReq = request.json['user']
        user = authenticate(userReq['email'],userReq['password'])
        if user==None:
            return jsonify({'status':404,'response':"User not found"})
        else:
            return jsonify(user['classes'])
    else:
        return 'Content-Type not supported!'
