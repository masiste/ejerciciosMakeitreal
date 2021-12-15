/* Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
 */

const number = prompt("Ingresa un número ")

if (number > 10) {
    console.log("El número ingresado es mayor que 10")
}
else{
    console.log("el número ingresado es menor o igual a 10")
}