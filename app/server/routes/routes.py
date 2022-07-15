from flask import Blueprint
from controllers.controllers import home,userLogin
blueprint = Blueprint('blueprint',__name__)

blueprint.route('/', methods=['GET'])(home)
blueprint.route('/login',methods=['POST'])(userLogin)
blueprint.route('/predict/student',methods=['GET'])(home)
blueprint.route('/predict/classroom',methods=['GET'])(home)
blueprint.route('/create/student',methods=['GET'])(home)
blueprint.route('/create/classroom',methods=['GET'])(home)
blueprint.route('/delete/student',methods=['GET'])(home)
blueprint.route('/delete/classroom',methods=['GET'])(home)
blueprint.route('/salon',methods=['GET'])(home)
