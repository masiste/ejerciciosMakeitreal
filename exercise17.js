/* Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). 
La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número. */


function randomGenerate(min, max){
    return Math.floor(Math.random()*(max-min))+min;}

let numberDicern = randomGenerate(1,10)
console.log("el numero generado es " +numberDicern)
let numberEnter = parseInt(prompt("What is the number ? "))

while (numberEnter != numberDicern) {
    numberEnter = parseInt(prompt("Intentalo de nuevo "))
}
console.log("Felicitaciones ese era")
