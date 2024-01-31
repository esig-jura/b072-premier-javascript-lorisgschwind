'use strict';

const h1 = document.querySelector('h1');

h1.style.backgroundColor='yellow';

const paras = document.querySelectorAll('p');

//Parcours le tableau des paragraphes
for (let i = 0; i< paras.length; i++){
    paras[i].style.color = 'red';
}

//Avec un for ... of
for(let unPara of paras){
    unPara.style.backgroundColor= 'black';
}

//Récuperation des éléments pour gérer les taches

const txtTache = document.querySelector('#tache');

const btAjouter = document.querySelector('button.ajouter');

const ulTaches = document.querySelector('.liste-taches');

console.log(txtTache, btAjouter, ulTaches);

//Ecouter le clic de la souris

function ajouter(){
    let saisie = txtTache.value;
    //alert(`Valeur saisie:  ${saisie}`);
    ulTaches.innerHTML += `<li>${saisie}</li>`;
    //Vider la liste
    txtTache.value = ' ';
    //Redonne le focus au champ de saisie
    txtTache.focus();
}
btAjouter.addEventListener ('click', ajouter);

//Ecoute clavier sur champ de saisie
txtTache.addEventListener ('keypress', function (event){
    console.log(event);
    if(event.key === 'Enter'){
        ajouter();
    }
});
