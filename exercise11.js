/* Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número. */

let enteredNumber = 4//parseInt(prompt('ingrese el numero a evaluar'))


if (enteredNumber%3 === 0 && enteredNumber%5 ===0 ) {
    console.log('bingbong');
    //return;
} else if (enteredNumber%3 == 0) {
    console.log('bing');
} else if (enteredNumber%5 == 0) {
    console.log('bong')
} else {
    console.log(`el nùmero ingresado es ${enteredNumber} `) 
}


/* Aprendizaje

Para el uso de de una doble validacion de condiciones se deben definir completamente cada una 
ellas y en el caso se conectan con el operador && para esas dos condiciones y el resultado bingbong.
Por otra parte la instruccion return me permite terminar la ejecicion del programa sin tener
que evaluar las condiciones si el numero es multiplo de 3 o 5, al determinar que el nùmero 
ingresado es multiplo de ambos ya no es necesario evaluar estar otras dos condiciones por 
separado.
Al ejecutar en el navegador se obtiene un error de uso de return, por tal razon se modifica la 
estructura del codigo para no usar el return en la doble condiciòn.  En su lugar se usan
varias estructura if e else if

 */