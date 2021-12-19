/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que 
determina  la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular 
el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

let peso = 70//parseInt(prompt('ingrese su peso -> '))
let altura = 1.49//parseInt(prompt('ingrese su altura -> '))

let BMI = peso / Math.pow(altura, 2)
console.log('su indice de masa corporal es : '+BMI)

if (BMI < 18.5) {
    console.log('Bajo de peso')
}if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('Normal')
}if (BMI >= 25 && BMI <= 29.9) {
    console.log('Sobrepeso')
}if (BMI >= 30) {
    console.log('Obeso')
}

/* Aprendizaje

Utilizacion de operadores de comparacion >=, <= para la definicion de rangos que deteminan la 
salida del programa */
