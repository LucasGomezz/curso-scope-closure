//Reasignacion y Redeclaracion
var firstName; //Declarandoo, Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David';// declarar /asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'Lucas'; //declarando y asignando
var secondName = 'Santi'; // reasignando y redeclarando
console.log(secondName);

//let (Se puede reasignar y no redeclarare)
let fruit = 'Apple'; // Declarar y asignar
fruit = 'Kiwi' // Reasignar
console.log(fruit);
// let fruit = 'Banana';

//const (no se puede ni reasignar ni redeclarar);
const animal = 'Dog'; //Declara y asigna
//animal = 'Cat'; //reasignando
console.log(animal);


const vehicles = [];
vehicles.push("Fiat");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);