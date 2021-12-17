/* Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo).
Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría 
un residuo de 1.
Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir
"No, el número x no es múltiplo de 5". */

let incomingNumber = parseInt(prompt("Ingrese por favor el número"));

result = incomingNumber % 5;

console.log(`el residuo es : ${result}`);

if (result == 0) {
    console.log(`Si, el número ${incomingNumber} es multiplo de 5`)
} else {
    console.log(`No, el número ${incomingNumber} no es multiplo de 5`)
}

/* Aprendizaje

Se utiliza el operador modulo % para determinar la condición de multiplo 
del número ingresado.Aprendizaje
Utilizo la expresión ${variable} para referenciar en el mensaje del console.log()
el valor de una variable,  una linea mas */