function randomNumber () { 
    const deci = Math.random();
    const decimal = deci + Math.random();
    const times10 = decimal * 10;
    const final = times10 + Math.random();
    const afinal= Math.floor (final);
    console.log (afinal)
}

randomNumber ();


//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function randomLetter () {
    const num = Math.floor(Math.random()*26)
    console.log (alphabet[num])
}
randomLetter ();

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

function randomfood () {
    const food = Math.floor(Math.random()*6)
    console.log (foods[food])
}
randomfood ();

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomStudent () {
    const person = Math.floor(Math.random()*7)
    console.log (students[person])
}
randomStudent ();
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////