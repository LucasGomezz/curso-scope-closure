//Variables

var a;//declarando
var b = 'b'//declaramos y asignamos
b = 'bb';//reasignando el valor
var a = 'aa'; //redeclaracion


//Global Scope
var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function contries(){
    country = 'Colombia;' //global puede accesdercer de afuera (para que no sea local tiene que tener var)
    console.log(country);
}

countries();
console.log(country);


