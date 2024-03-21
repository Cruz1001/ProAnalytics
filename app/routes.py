from app import app
from flask import Flask, send_from_directory, render_template, jsonify
import os
import sys
from app.scraping import obter_dados_jogadores


@app.route('/')
@app.route('/index')

def index():
    return render_template('index.html')

@app.route('/buscar_time/<nomeTime>')
def buscar_time(nomeTime):
    jogadores = obter_dados_jogadores(nomeTime)

    jogadores_serializaveis = []
    for jogador in jogadores:
        jogador_dict = {"nome": jogador.nome, "role": jogador.role}
        jogadores_serializaveis.append(jogador_dict)

    return jsonify({"encontrado": True, "jogadores": jogadores_serializaveis})

@app.route('/get_js/<path:filename>')
def get_js(filename):
    return send_from_directory('static', filename)

@app.route('/css/<path:path>')
def serve_css(path):
    return send_from_directory('static', path)


@app.route('/imagens/<diretorio>/<path:filename>')
def enviar_imagem(diretorio, filename):
    diretorio = ['logos', 'fundos', 'jogadores']