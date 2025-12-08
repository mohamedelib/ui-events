/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt
// Stap 1: querySelector
// let scaleLink = document.querySelector...
let frontEndLink = document.querySelector('a[href="#frontend"]')
// Stap 2: addEventListener
// scaleLink.addEventListener...
frontEndLink.addEventListener('click', scale)


// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
function scale(){
frontEndLink.classList.toggle('scale')
}


// Button moet een translate animatie krijgen
// Stap 1: querySelector
// let scaleLink = document.querySelector...
let enButton = document.querySelector('a[href="#and"]')
// Stap 2: addEventListener
enButton.addEventListener('click', animatie)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function animatie(){
enButton.classList.toggle('animatie')
}

// Button moet een translate animatie krijgen
// Stap 1: querySelector
let devButton = document.querySelector('a[href="#development"]')
// let scaleLink = document.querySelector...
// Stap 2: addEventListener
devButton.addEventListener('click', schudden)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function schudden(){
devButton.classList.toggle('shake')
}

// Button moet een translate animatie krijgen
// Stap 1: querySelector
let sprintButton = document.querySelector('a[href="#sprint-5"]')
// let scaleLink = document.querySelector...
// Stap 2: addEventListener
sprintButton.addEventListener('focus', focusev)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function focusev(){
  sprintButton.classList.toggle('focusev')
}
// Button moet een translate animatie krijgen
// Stap 1: querySelector
let fixBtn = document.querySelector('a[href="#fix"]');

// let scaleLink = document.querySelector...
// Stap 2: addEventListener
fixBtn.addEventListener('mouseover', texthover)
fixBtn.addEventListener('mouseleave', textLeave)


// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function texthover(){
fixBtn.textContent = 'hallo';
}
function textLeave() {
fixBtn.textContent = 'Fix';
}

// #6
// Button moet een mouseout propertie hebben en roteren
// Stap 1: querySelector
let theButton = document.querySelector('a[href="#the"]');
// let scaleLink = document.querySelector...
// Stap 2: addEventListener
theButton.addEventListener('mouseout', rotatie)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)

function rotatie (){
theButton.classList.toggle('rotate')
}


// #8
// Button moet een mousedown en mouse up propertie hebben flip en terug
// Stap 1: querySelector
let flowBtn = document.querySelector('a[href="#flow"]');
// Stap 2: addEventListener
flowBtn.addEventListener('mouseup', rotatie)
flowBtn.addEventListener('mousedown', rotatie2)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)

function rotatie (){
flowBtn.classList.add('rotate');
flowBtn.classList.remove('rotate2');
}
function rotatie2() {
  flowBtn.classList.remove('rotate');
  flowBtn.classList.add('rotate2');
}

// Button moet rood worden als je de R toets indrukt
// Stap 1: querySelector
let userButton = document.querySelector('a[href="#user"]');
// Stap 2: addEventListener
userButton.addEventListener('keyup', function(event) {
  if (event.key === 'r') {
    userButton.style.backgroundColor = 'red';
  }
});
// Button moet opblazen als ballon
// Stap 1: querySelector
let interfaceBtn = document.querySelector('a[href="#interface"]');
// Stap 2: addEventListener
interfaceBtn.addEventListener('keydown', function() {
  interfaceBtn.classList.add('balloon');
});

interfaceBtn.addEventListener('keyup', function() {
  interfaceBtn.classList.remove('balloon');
});


