from flask import Blueprint
from controllers.controllers import home,userLogin,getAllClassrooms
from controllers.predict import predictStudentPerformance
from controllers.create import createUser
blueprint = Blueprint('blueprint',__name__)

blueprint.route('/', methods=['GET'])(home)
blueprint.route('/login',methods=['POST'])(userLogin)
blueprint.route('/predict/student',methods=['POST'])(predictStudentPerformance)
blueprint.route('/predict/classroom',methods=['GET'])(home)
blueprint.route('/create/user',methods=['POST'])(createUser)
blueprint.route('/delete/student',methods=['GET'])(home)
blueprint.route('/delete/classroom',methods=['GET'])(home)
blueprint.route('/classrooms',methods=['GET'])(getAllClassrooms)
