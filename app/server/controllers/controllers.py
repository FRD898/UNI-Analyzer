from flask import jsonify,request
from models.models import insertUser,authenticate
def home():
    return jsonify("Home route")

def userLogin():
    #query = request.args.get('data') -->get
    #insertUser()
    headers = request.headers
    authenticate(headers['email'],headers['password'])
    return jsonify({'status':"Home route",'response':"query"})