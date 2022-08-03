from prediction.prediction import predict
from models.models import authenticate,updateUser
from flask import jsonify,request
def predictStudentPerformance():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        student = json['student']
        predictor = json['predictor']
        user = authenticate(json['email'],json['password'])
        if user==None:
            return jsonify({'status':404,'response':"User not found"})
        else :
            classrooms = user['classes']
            existStudent=False
            if classrooms == []:
                classrooms.append({
                    "class_name":student['class'],
                    "students":[student]
                })
            else:
                existsClass=False
                for room in classrooms:
                    if student['class']==room['class_name']:
                        existsClass=True
                        for studentRoom in room['students']:
                            if studentRoom['name'] == student['name'] and studentRoom['code']==student['code']:
                                existStudent=True
                                break
                        if not existStudent:
                            room['students'].append(student)
                        break
                if not existsClass:
                    classrooms.append({
                    "class_name":student['class'],
                    "students":[student]
                    })

            #user['classes'] = classrooms
            prediction = predict(student['answers'],predictor)
            if not existStudent:
                student['prediction']=prediction
                student['predictor']=predictor
                print("uptaded user")
                if updateUser({'email':json['email'],'password':json['password']},{"$set":user})==None:
                    return jsonify({'status':500,'response':'Failed to update user'})
                else:
                    return jsonify({'status':200,'response':prediction})
            else:
                return jsonify({'status':200,'response':prediction})
    else:
        return 'Content-Type not supported!'
