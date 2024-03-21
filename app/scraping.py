import requests
from bs4 import BeautifulSoup

#Cria a classe jogador
class Jogador:
       def __init__(self, nome, role) :
              self.nome = nome
              self.role = role
def obter_dados_jogadores(nomeTimeUnderscore):

        #Pega o site que iremos raspar os dados da Line e deixa acessivel para o código
        response = requests.get(f'https://lol.fandom.com/wiki/{nomeTimeUnderscore}')
        content = response.content
        site = BeautifulSoup(content, 'html.parser')

        #encontra a tabela que contem a Line-up do time
        tabelaLine = site.find('table', attrs= {'class': 'wikitable'})

        #encontra os nomes e roles da line
        nomes = tabelaLine.findAll('td', attrs= {'class': 'team-members-player'})
        roles = tabelaLine.findAll('td', attrs= {'class': 'team-members-role'})

        #inicia as litas 
        jogador_objs = [] #Aqui estão todos os players da Line
        roles_vistas = set() #Será usado para verificar a existencia de roles repetidas, para decidir qual é a Line-up titular
        line_objs = [] #Recebe somenta a Line-up titular



        #Coloca os dados nas listas

        for nome, role in zip(nomes, roles):
                
                #encontra o nome e a role dentro da tabela
                nome_link = nome.find('a', attrs={'class': 'catlink-players'})
                role_span = role.find('span', attrs={'class': 'markup-object-name'})

                #verifica se foram encontrados as roles e nomes, adicionando-os e retirando os players que não fazem parte da Line principal
                if nome_link and role_span:
                        obj = Jogador(nome_link.text, role_span.text)
                        jogador_objs.append(obj)

                if obj.role not in roles_vistas:
                        line_objs.append(obj)
                        roles_vistas.add(obj.role)
                
        return line_objs
