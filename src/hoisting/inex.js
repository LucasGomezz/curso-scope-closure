//Hoisting
// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.
// Esto sucede solamente con las declaraciones y no con las asignaciones.
var nameOfDog; //Undifined

console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog);

var elmo; //undefined

nameOfCat();

function nameOfCat() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';