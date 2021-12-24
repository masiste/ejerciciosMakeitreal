/* Escribe un programa para la consola que le pida al usuario un número e imprima los números 
desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir 15 (1+2+3+4+5). 
Si el usuario ingresa el número 10, el programa debe imprimir 55.:

1
2
3
4
5 */

let numberOftimes = parseInt(7)// promt('Enter number for the add');


//prompt('');
let suma = 0;

for (let index = 1; index <= numberOftimes; index++) {
    suma = suma+index;
    console.log(suma)
}
    console.log(suma)
