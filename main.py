import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='.', template_folder='.')
app.secret_key = os.environ.get("SESSION_SECRET", "carot-ne-travel-website-secret")

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)