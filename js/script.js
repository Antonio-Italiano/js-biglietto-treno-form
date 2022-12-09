//1# prendo elementi dalla pagina 

// imput element
const nameImput = document.getElementById ('inputname');
const ageImput = document.getElementById ('inputage');
const pathwayImput = document.getElementById ('inputpathway');
const buttonImput = document.getElementById ('button');
const clearButton = document.getElementById ('clear')

// ticket element
const nameElement = document.getElementById ('name');
const rateElement = document.getElementById ('rate');
const coachElement = document.getElementById ('coach');
const cpElement = document.getElementById ('cp');
const priceElement = document.getElementById ('price');
const pathwayElement = document.getElementById ('pathway');

// event listner sul bottone
buttonImput.addEventListener('click', function() {
    // valori form
    const nameValue = nameImput.value.trim();
    const ageValue = ageImput.value.trim();
    const pathwayValue = pathwayImput.value.trim();

    // validazione
    if (!nameValue || isNaN(pathwayValue) || pathwayValue < 10) {
        alert('valori ineriti non validi');
    }

    // tariffa ordinaria 
    let rateOption = 'Ordinaria';
    let price = 0.21 * pathwayValue;
    let km = pathwayValue;

    // tariffa scontata 
    if (ageValue === 'under') {
        price = price * 0.8;
        rateOption = 'Under'
    } else if (ageValue === 'over') {
        price = price * 0.6;
        rateOption = 'Over 65';
    }

    // arrotondamento del prezzo 
    price = price.toFixed(2) + '\u20AC';

    // carrozza e cp 

    const coach = 'Carrozza: ' + Math.floor(Math.random() * 10) + 1;

    const cp = 'Codice CP: ' + Math.floor(Math.random() * (100000 - 9000)) + 9000;

    // dati biglietto
    nameElement.innerText = nameValue;
    rateElement.innerText = rateOption;
    coachElement.innerText = coach;
    cpElement.innerText = cp;
    priceElement.innerText = price;
    pathwayElement.innerText = km + 'km';
})

// bottone clear
clearButton.addEventListener('click', function() {
    // cancelliamo i valori
    nameImput.value = '';
    ageImput.value = '';
    pathwayImput.value = '10';
    
})