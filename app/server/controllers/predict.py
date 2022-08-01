from prediction.prediction import predict
from flask import jsonify,request
def predictStudentPerformance():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print(predict(json['answers'],'rfc'))
        return jsonify({'status':200,'response':predict(json['answers'],'rfc')})
    else:
        return 'Content-Type not supported!'
