from flask import jsonify,request
def home():
    return jsonify("Home route")

def userLogin():
    #query = request.args.get('data') -->get
    query = request.headers['data']
    return jsonify({'msg':"Home route",'data':query})