from flask import Flask, jsonify,request
from flask_cors import CORS
import pickle
from sklearn import svm
import pandas as pd
import numpy as np
import io
import json
from routes.routes import blueprint
from database import mongo

app = Flask(__name__)
app.config.from_object('config')
CORS(app)
mongo.init_app(app)

app.register_blueprint(blueprint, url_prefix="/")



@app.route("/add_one")
def add_one():
    db.users.insert_one({'title': "todo title", 'body': "todo body"})
    return jsonify(message="success")


#result = model.predict([np.array([0,5,5,0])])
#print(result)
'''
@app.route('/')
def home():
    return jsonify("Hola mundo")

@app.route('/search')
def searchDocs():
    svm = pr.Cargar("randomForest2")
    query = request.args.get('data')
    data = convertDataFrame(query)
    df = pr.prepareData(data)
    atributos = ['38','28','37','26','34','24','29','25','19']
    X = df[atributos]
    y_pred = svm.predict(X)
    res = []
    real = []
    for i,val in enumerate(y_pred):
        print(f'val {val}')
        if val==0.0:
            res.append("desaprobará")
        else:
            res.append("aprobará")
        if df['18'][i]==0.0:
            real.append("desaprobará")
        else:
            real.append("aprobará")
    res = {
        "prediccion": res,
        "real": real

    }
    return jsonify(res)'''



if __name__ == '__main__':
    app.run(debug = True, port = 4000)