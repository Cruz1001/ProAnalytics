const times = {
    'Fluxo':{
        logo: './Imagens/Logos/Fluxologo.webp',
        fundo: './Imagens/Fundos/backgroundBrancoRoxo.png'
    },
    'FURIA':{
        logo: './Imagens/Logos/FURIAlogo.webp',
        fundo: './Imagens/Fundos/backgroundBrancoPreto.png'
    },
    'INTZ':{
        logo: './Imagens/Logos/INTZlogo.webp',
        fundo: './Imagens/Fundos/backgroundBrancoPreto.png'
    },
    'kABuM! Esports':{
        logo: './Imagens/Logos/Kabumlogo.webp',
        fundo: './Imagens/Fundos/backgroundLaranjaPreto.png'
    },
    'Liberty':{
        logo: './Imagens/Logos/Libertylogo.webp',
        fundo: './Imagens/Fundos/backgroundCiano.png'
    },
    'Los Grandes':{
        logo: './Imagens/Logos/Los_Grandeslogo.webp',
        fundo: './Imagens/Fundos/backgroundLaranjaPreto.png'
    },
    'LOUD':{
        logo: './Imagens/Logos/LOUDlogo.webp',
        fundo: './Imagens/Fundos/backgroundVerde.png'
    },
    'paiN Gaming':{
        logo: './Imagens/Logos/PaiN_Gaminglogo.webp',
        fundo: './Imagens/Fundos/backgroundPretoVermelho.png'
    },
    'RED Canids':{
        logo: './Imagens/Logos/RED_Canidslogo.webp',
        fundo: './Imagens/Fundos/backgroundVermelho.png'
    },
    'Vivo Keyd Stars':{
        logo: './Imagens/Logos/Vivo_Keyd_Starslogo.webp',
        fundo: './Imagens/Fundos/backgroundRoxo.png'
    },

};



var  inputTime1 = window.document.getElementById('txtbtime1');
var  inputTime2 = window.document.getElementById('txtbtime2'); 


inputTime1.addEventListener('change', () => escolher(inputTime1.value, 'imgLogo1', 'NomeTime1'));
inputTime2.addEventListener('change', () => escolher(inputTime2.value, 'imgLogo2', 'NomeTime2'));

function escolher(nomeTime, idImg, idTxt){
    const img = window.document.getElementById(idImg);
    const txt = window.document.getElementById(idTxt);

    if (times.hasOwnProperty(nomeTime)) {
        img.src = times[nomeTime].logo;
        txt.innerHTML = `${nomeTime}`;
    }else{
        img.src = './Imagens/Logos/Placeholder_Logo.png';
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






