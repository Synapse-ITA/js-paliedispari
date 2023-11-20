
//PARI E DISPARI 

// SCELTA E PROMPT DEI DATI

let pariDispariUtente = prompt("Scegli e scrivi Pari o Dispari").toLowerCase();
let numUtente = prompt("Scegli il tuo numero da 1 a 5");
numUtente = parseInt(numUtente);
let numCPU = Math.floor(Math.random () * 5) + 1;

console.log("Numero della CPU" + " " + numCPU);
console.log("Numero dell'Utente" + " " + numUtente);

// GENERIAMO UN NUMERO RANDOM DA 1 A 5 CON LA FUNZIONE

function cpuNumberGenerator () {
    return Math.floor(Math.random () * 5) + 1;
    };

// SOMMIAMO I DUE NUMERI

let sommaNumeri = numUtente + numCPU;
console.log("Somma dei numeri" + " " + sommaNumeri);

// STABILIAMO SE LA SOMMA DEI DUE NUMERI E' PARI O DISPARI CON LA FUNZIONE

function pariODispari (somma) {
    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

// CHI HA VINTO

let risultato = pariODispari(sommaNumeri);
if (pariDispariUtente === risultato) {
    console.log("Hai vinto!");
} else {
    console.log("Hai Perso!");
}

// GIOCO PALINDROMO

let parolaUtente = prompt("Scrivi una parola e ti dirò se è palindroma!").toLowerCase();

function isPalindrome(word) {
    let parolaInversa = word.split("").reverse().join("");
    if (word === parolaInversa) {
        alert("la parola è palindroma")
    } else {
        alert("la parola non è palindroma")
    }
}

isPalindrome(parolaUtente);

