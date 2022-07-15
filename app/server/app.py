from flask import Flask, jsonify,request
from flask_cors import CORS
import pickle
from sklearn import svm
import pandas as pd
import numpy as np
from prediction import prediction as pr
import io
import json

app = Flask(__name__)
CORS(app)
model = pickle.load(open("./prediction/svm.sav", 'rb'))
#result = model.predict([np.array([0,5,5,0])])
#print(result)
def convertDataFrame(frontData):
    '''
        Recibe una lista de filas(listas) 
    '''
    data = json.loads(frontData)
    columnas = data[0]

    dict = {}
    for i in columnas[1:]:
        dict[str(i)] = []

    for row in data[1:]:
        for name,col in zip(columnas[1:],row[1:]):
            dict[name].append(col)

    df = pd.DataFrame.from_dict(dict)
    return df

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
    return jsonify(res)



if __name__ == '__main__':
    app.run(debug = True, port = 4000)