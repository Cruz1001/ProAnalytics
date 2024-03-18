from app import app
from flask import Flask, send_from_directory, render_template
import os

@app.route('/')
@app.route('/index')

def index():
    return render_template('index.html')

@app.route('/get_js/<path:filename>')
def get_js(filename):
    return send_from_directory('static', filename)

@app.route('/css/<path:path>')
def serve_css(path):
    return send_from_directory('static', path)


@app.route('/imagens/<diretorio>/<path:filename>')
def enviar_imagem(diretorio, filename):
    diretorio = ['logos', 'fundos', 'jogadores']