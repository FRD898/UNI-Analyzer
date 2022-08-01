from flask import jsonify,request
from models.models import addNewStudent

def addStudent():
    headers = request.headers
    student = {
        'name': headers['name'],
        'code': headers['code'],
        'pc1': headers['pc1'],
        'pc2': headers['pc2'],
        'middle': headers['middle'],
        'participation': headers['participation'],
        'tasks': headers['tasks'],
    }
    res = addNewStudent(student)
    return jsonify({'status':200,'response':"success"})