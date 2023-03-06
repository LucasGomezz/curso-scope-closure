//Strict Mode(No te deja usar variables sin definir);
//var pi; undefined lo interpreto javascript
'use strict';
pi = 3.1416;
console.log(pi);

function myFunction (){
    'use strict';
    return pi = 3.1416
}

console.log(myFunction);//no se puede sin definir
