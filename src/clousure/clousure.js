//Clousure
//Permite acceder al ambito de una funcion exterior desde una funcion interior.En js, las clausuras se crean cada vez que una funcion es creada.
//No son siempre utilizados
//Tienes clousure cuando una funcion cualquiera accede a una variable fuera de su contexto

function saludar(){
    let userName = 'Lucas';

    function displayUsername(){
        return `Hello ${userName}`;
    }
    return displayUsername;
}

const g = saludar();
console.log(g);
console.log(g());
