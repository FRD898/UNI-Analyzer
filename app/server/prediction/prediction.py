from sklearn import svm
import pandas as pd
import numpy as np
import sys
import pickle
from sklearn.model_selection import train_test_split
import uuid
import re
import random

def Load(name):
  print(sys.path)
  return pickle.load(open(f"./prediction/{name}.sav", 'rb'))

def predict(data, model):
  model_loaded = Load(model)
  featuresClas = [1,3,4,5] #23,28,37,38
  featuresReg = [0,2,3,4,5]#6,24,28,37,38
  salida = model_loaded.predict([np.array(data)[featuresClas]]) if model =='rfc' or model =="svc" else model_loaded.predict([np.array(data)[featuresReg]])
  return salida[0]