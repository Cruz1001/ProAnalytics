console.log("O arquivo script.js está sendo executado.");


const times = {
    'Fluxo':{
        logo: 'static/Imagens/Logos/Fluxologo.webp',
        fundo: 'static/Imagens/Fundos/backgroundBrancoRoxo.png'
    },
    'FURIA':{
        logo: 'static/Imagens/Logos/FURIAlogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundBrancoPreto.png'
    },
    'INTZ':{
        logo: 'static/Imagens/Logos/INTZlogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundBrancoPreto.png'
    },
    'KaBuM!_Esports':{
        logo: 'static/Imagens/Logos/Kabumlogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundLaranjaPreto.png'
    },
    'Liberty':{
        logo: 'static/Imagens/Logos/Libertylogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundCiano.png'
    },
    'Los_Grandes':{
        logo: 'static/Imagens/Logos/Los_Grandeslogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundLaranjaPreto.png'
    },
    'LOUD':{
        logo: 'static/Imagens/Logos/LOUDlogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundVerde.png'
    },
    'paiN_Gaming':{
        logo: 'static/Imagens/Logos/PaiN_Gaminglogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundPretoVermelho.png'
    },
    'RED_Canids':{
        logo: 'static/Imagens/Logos/RED_Canidslogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundVermelho.png'
    },
    'Vivo_Keyd_Stars':{
        logo: 'static/Imagens/Logos/Vivo_Keyd_Starslogo.webp',
        fundo: 'static/Imagens/Fundos/backgroundRoxo.png'
    },

};

var  inputTime1 = window.document.getElementById('txtbtime1');
var  inputTime2 = window.document.getElementById('txtbtime2'); 

inputTime1.addEventListener('change', () => {
    inputTime1.value = inputTime1.value.replace(/\s+/g, '_'); // Substitui espaços por underscores
});
inputTime2.addEventListener('change', () => {
    inputTime2.value = inputTime2.value.replace(/\s+/g, '_'); // Substitui espaços por underscores
});

inputTime1.addEventListener('change', () => escolher(inputTime1.value, 'imgLogo1', 'NomeTime1', 'NomeTop1', 'NomeJng1', 'NomeMid1', 'NomeAdc1', 'NomeSup1'));
inputTime2.addEventListener('change', () => escolher(inputTime2.value, 'imgLogo2', 'NomeTime2', 'NomeTop2', 'NomeJng2', 'NomeMid2', 'NomeAdc2', 'NomeSup2'));

function escolher(nomeTime, idImg, idTxt, top, jng, mid, adc, sup){
    const img = window.document.getElementById(idImg);
    const txt = window.document.getElementById(idTxt);
    const topElement = window.document.getElementById(top);
    const jngElement = window.document.getElementById(jng);
    const midElement = window.document.getElementById(mid);
    const adcElement = window.document.getElementById(adc);
    const supElement = window.document.getElementById(sup);

    const nomeExibicao = nomeTime.replace(/_/g, ' ');

    if (times.hasOwnProperty(nomeTime)) {
        img.src = times[nomeTime].logo;
        txt.innerHTML = `${nomeExibicao}`;
        fetch(`/buscar_time/${nomeTime}`)
            .then(response => response.json())
            .then(data => {
                if (data.encontrado){
                    const jogadores = data.jogadores;

                    jogadores.forEach((jogador, index) => {
                        window[`Jogador ${index + 1}:`, jogador];
                        console.log(`Jogador ${index + 1}:`, jogador);
                        topElement.innerHTML = jogadores[0].nome;
                        jngElement.innerHTML = jogadores[1].nome;
                        midElement.innerHTML = jogadores[2].nome;
                        adcElement.innerHTML = jogadores[3].nome;
                        supElement.innerHTML = jogadores[4].nome;

                    });
                }
            })

        
    }else{
        img.src = 'static/Imagens/Logos/Placeholder_Logo.png';
        txt.innerHTML = 'Time não encontrado'
    }
}

inputTime1.addEventListener('change', () => trocarFundo(inputTime1.value, 'Time_1'));
inputTime2.addEventListener('change', () => trocarFundo(inputTime2.value, 'Time_2'));

function trocarFundo(nomeTime, infoDivId){
    const infoDiv = window.document.getElementById(infoDivId);
    
    if (times.hasOwnProperty(nomeTime)){
        const timeInfo = times[nomeTime];
        infoDiv.style.backgroundImage = `url('${timeInfo.fundo}')`;
    } else{
        infoDiv.style.backgroundColor = "#FEFEFE";
        infoDiv.style.backgroundImage = `url('')`;
    }
}






