
//PARI E DISPARI 



// SCELTA E PROMPT DEI DATI

let PariDispariUtente = prompt("Scegli e scrivi Pari o Dispari");
let numUtente = prompt("Scegli il tuo numero da 1 a 5");
numUtente = parseInt(numUtente);
let numCPU = Math.floor(Math.random () * 5) + 1;


console.log("Numero della CPU" + " " + numCPU);
console.log("Numero dell'Utente" + " " + numUtente);


// GENERIAMO UN NUMERO RANDOM DA 1 A 5 CON LA FUNZIONE

function cpuNumberGenerator () {
    let numCPU = Math.floor(Math.random () * 5) + 1;
    };

// SOMMIAMO I DUE NUMERI

let sommaNumeri = numUtente + numCPU;
console.log("Somma dei numeri" + " " + sommaNumeri);

// STABILIAMO SE LA SOMMA DEI DUE NUMERI E' PARI O DISPARI CON LA FUNZIONE

function pariODispari () {
    if (sommaNumeri % 2 == 0);

} else {
    
}


// CHI HA VINTO