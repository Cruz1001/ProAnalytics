const times = {
    'Fluxo':{
        logo: './Imagens/Logos/Fluxologo.webp'
    },
    'FURIA':{
        logo: './Imagens/Logos/FURIAlogo.webp'
    },
    'INTZ':{
        logo: './Imagens/Logos/INTZlogo.webp'
    },
    'kABuM! Esports':{
        logo: './Imagens/Logos/Kabumlogo.webp'
    },
    'Liberty':{
        logo: './Imagens/Logos/Libertylogo.webp'
    },
    'Los Grandes':{
        logo: './Imagens/Logos/Los_Grandeslogo.webp'
    },
    'LOUD':{
        logo: './Imagens/Logos/LOUDlogo.webp'
    },
    'paiN Gaming':{
        logo: './Imagens/Logos/PaiN_Gaminglogo.webp'
    },
    'RED Canids':{
        logo: './Imagens/Logos/RED_Canidslogo.webp'
    },
    'Vivo Keyd Stars':{
        logo: './Imagens/Logos/Vivo_Keyd_Starslogo.webp'
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






