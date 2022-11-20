let listeN = {"DIABIRA Sylla - PHOENIX" : 'candidat1',
"SMAOUNE Oussama - PHOENIX": 'candidat2',
"HAMMACHE Kais - ANDROMEDA": 'candidat3',
"SALEMKOUR Tinhinane - ANDROMEDA": 'candidat4',
"MOHAMMEDI Mazigh - CYGNUS": 'candidat5',
"PAUZIE Teva - CYGNUS": 'candidat6',
"ANTOINE David - DRACO": 'candidat7',
"BEDDA Youssef - DRACO": 'candidat8',
"ANDRIATSAHAVOJAONA Ony - PEGASUS": 'candidat9',
"VERMEERSCH Quentin - PEGASUS": 'candidat10',
"LE PORHO Keinan - RAMANUJAN": 'candidat11',
"YEBE OLLOMO Ann - RAMANUJAN": 'candidat12'
}

document.querySelectorAll('.nom').forEach(n => n.addEventListener('click',function(){
    let candidatId = listeN[this.textContent];
    let current = document.querySelector('.showed')
    current.classList.remove('showed');
    current.classList.add('hided')
    document.getElementById(candidatId).classList.remove('hided');
    document.getElementById(candidatId).classList.add('showed');
}));

document.querySelectorAll('.candidat').forEach(c=>c.classList.add('hided'));

document.querySelector('#candidat1').classList.remove('hided');
document.querySelector('#candidat1').classList.add('showed');

document.querySelector('#dia-gauche').addEventListener('click',pGauche);


function pGauche(){
    let currentPassage = document.querySelector('.showed');
    let passageId = currentPassage.getAttribute('id');
    if (passageId === 'candidat1'){
        return;
    }
    currentPassage.classList.remove('showed');
    currentPassage.classList.add('hided');
    let candidatNumber ='';
    if (passageId[passageId.length-2] === '1') {
        candidatNumber = passageId[passageId.length-2] + passageId[passageId.length-1];
    } else {
        candidatNumber = passageId[passageId.length-1];
    }
    let candidatId = 'candidat' + (parseInt(candidatNumber)-1);
    let passage = document.getElementById(candidatId);
    passage.classList.remove('hided');
    passage.classList.add('showed');
}

document.querySelector('#dia-droite').addEventListener('click',pDroite);

function pDroite(){

    let currentPassage = document.querySelector('.showed');
    let passageId = currentPassage.getAttribute('id');
    if (passageId === 'candidat12'){
        return;
    }
    currentPassage.classList.remove('showed');
    currentPassage.classList.add('hided');
    let candidatNumber ='';
    if (passageId[passageId.length-2] === '1') {
        candidatNumber = passageId[passageId.length-2] + passageId[passageId.length-1];
    } else {
        candidatNumber = passageId[passageId.length-1];
    }
    let candidatId = 'candidat' + (parseInt(candidatNumber)+1);
    let passage = document.getElementById(candidatId);
    passage.classList.remove('hided');
    passage.classList.add('showed');
}
