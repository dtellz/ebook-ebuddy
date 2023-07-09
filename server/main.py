import time
from flask import Flask, request
from  api.epub_loader import loadEpub

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        loadEpub(f)
        return 'file uploaded successfully'
