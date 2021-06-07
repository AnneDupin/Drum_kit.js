//  What does DATA KEY means ?
// A data key is a key which holds a variable value which can be applied to a 
// string or a text block, in order for it to be encrypted or decrypted. 
// It must be noted that a data key is used to encrypt and decrypt only data 
// but not keys, as required in certain encryption formulas.
// ` = backtick † 

function playSound(e) {

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

// On prend "audio" et dès que l'on va appuyer sur keycode correspond à cette variable
// e.keycode = l'évènement que l'on mettra dans la variable audio

const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

if (!audio) return;
key.classList.add('playing'); // ajoute une classe > lumière lorsqu'on joue
audio.currentTime = 0; // Remet le son à 0 dès qu'on joue
audio.play();
}

// Fonction sert à enlever la classe playing
function removeTransition(e) {
    e.target.classList.remove('playing');
}

// Fonction qui enlève la transition
// Tableau de toutes les div "keys"
const keys = Array.from(document.querySelectorAll('.key'));
// On les écoute avec For Each > transition finie, lancer la fonction removeT
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Faire marcher la fonction

window.addEventListener('keydown', playSound);

// A chaque fois qu'on va appuyer sur une lettre 


