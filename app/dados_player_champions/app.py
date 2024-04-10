import requests
from bs4 import BeautifulSoup
import pandas as pd

players = ['Fuuu', 'Kiari', 'Kojima', 'scamber', 'sting', 'Ayu_(Andrey_Saraiva)', 'Tutsz', 'zay', 'Destroy_(Yoon_Jeong-min)', 'Mir_(Park_Mi-reu)', 'stiner', 'xyno', 'uZent', 'Aithusa', 'Damage', 'NinjaKiwi',
           'Tay', 'Yampi', 'Ceos', 'Hauz', 'Lonely_(Han_Gyu-joon)','Malrang', 'Netuno', 'Cavalo', 'Drakehero', 'Makes', 'micaO', 'Piloto', 'Celo', 'Envy_(Bruno_Farias)', 'Kabbie', 'Seize', 'SuperCleber', 
           'Croc', 'RedBert', 'Robo', 'Route', 'tinowns', 'CarioK', 'dyNquedo', 'Kuri', 'TitaN', 'Wizer', 'Aegis_(Gabriel_Lemos)', 'Brance', 'fNb', 'Grevthar', 'Jojo_(Gabriel_Dzelme)', 'Frostyy', 
           'Disamis', 'Guigo', 'ProDelta', 'SMILEY_(Ludvig_Granquist)', 'Leleko', 'Toucouille']

for player in players:
    response = requests.get(f'https://lol.fandom.com/wiki/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=PlayerByChampion&TS%5Blink%5D={player}&_run=#pfForm')
    content = response.content
    site = BeautifulSoup(content, 'html.parser')

    dados = site.find('table')
    data = []
    
    print(dados.prettify)
    for linha in dados.find_all('tr'):
        dados_linha = linha.find_all('td')
        if dados_linha:
            campeao_dado = dados_linha[0].find('span').get_text(strip=True)
            numeros_dados = [dado.get_text(strip=True) for dado in dados_linha[1:]]
            data.append([campeao_dado] + numeros_dados)

    df = pd.DataFrame(data)
    df.to_excel(f'{player}_stats.xlsx')