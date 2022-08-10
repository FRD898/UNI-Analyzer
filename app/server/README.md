# Servidor
El servidor está construido con Flask, realiza la predicción del rendimiento final del estudiante cargando modelos de Machine Learning de Scikit-learn. Los datos son guardados en MongoDB mediante PyMongo.

## Rutas
Las dos rutas principales implementadas son:
* `http://localhost:4000/predict/student` para predecir el resultado de un estudiante
* `http://localhost:4000/classrooms` para obtener la lista de clases y salones del usuario

## Instalación
a. Para instalar de manera global
* `cd app/server`
* `pip install -r requirements.txt`

b. Para instalar empleando un entorno en Python
* `cd app/server`
* `python3 -m venv /venv`
* `source venv/bin/activate`
* `pip install -r requirements.txt`

## Correr
`python app.py`
