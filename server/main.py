import time
from flask import Flask
from  api.test import run

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    run()
    return {'time': time.time()}
