from app import app
from flask import Flask, send_from_directory, render_template
import os
import sys
from app.scraping import obter_dados_jogadores


@app.route('/')
@app.route('/index')

def index():
    line_objs = obter_dados_jogadores()
    print(line_objs)
    line = obter_dados_jogadores()
    return render_template('index.html', line = line)

@app.route('/get_js/<path:filename>')
def get_js(filename):
    return send_from_directory('static', filename)

@app.route('/css/<path:path>')
def serve_css(path):
    return send_from_directory('static', path)


@app.route('/imagens/<diretorio>/<path:filename>')
def enviar_imagem(diretorio, filename):
    diretorio = ['logos', 'fundos', 'jogadores']