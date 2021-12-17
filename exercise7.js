/* Escribe un programa que piense un número de forma aleatoria del 1 al 10
y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola 
"Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!" */


function randomGenerate(min, max){
    return Math.floor(Math.random()*(max-min))+min;}

let numberDicern = randomGenerate(1,10)
console.log("el numero generado es " +numberDicern)
let numberEnter = parseInt(prompt("What is the number ? "))

while (numberEnter != numberDicern) {
    numberEnter = parseInt(prompt("Intentalo de nuevo "))
}
console.log("Felicitaciones ese era")

/* Aprendizaje 

cambio en la declaracion de variables por let para que acepten otros valores en el 
proceso de intentar adivinar el número generado por el programa  */
