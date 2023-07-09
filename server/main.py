import time
from flask import Flask
from  api.epub_loader import loadEpub

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
