const times = {
    'Fluxo':{
        logo: 'Fluxologo_square.webp'
    },
    'FURIA':{

    },
    'INTZ':{

    },
    'KaBuM! Esports':{

    },
    'Liberty':{
        
    },
    'Los Grandes':{

    },
    'LOUD':{

    },
    'paiN Gaming':{

    },
    'RED Canids':{

    },
    'Vivo Keyd Stars':{

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






