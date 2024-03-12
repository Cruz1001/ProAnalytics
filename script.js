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

inputTime1.addEventListener('change', () => escolher(inputTime1.value, 'Logo_Time1'));
inputTime2.addEventListener('change', () => escolher(inputTime2.value, 'Logo_Time2'));

function escolher(nomeTime, infoDivId){
    const infoDiv = window.document.getElementById(infoDivId);
    infoDiv.innerHTML = '';

    if (times.hasOwnProperty(nomeTime)) {
        const timeInfo = times[nomeTime];
        infoDiv.innerHTML = `<h2>${nomeTime}</h2><img src="${timeInfo.logo}" alt="Logo do ${nomeTime}">`;
    }else{
        infoDiv.innerHTML = '<p>Time não reconhecido <p>';
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
    }
}






