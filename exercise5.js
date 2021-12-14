const peso = parseInt(prompt("Ingrese su peso: "))
const altura = parseFloat(prompt("Ingrese su altura"))
let imc = parseFloat(peso / Math.pow(altura,2))

console.log("Su indice de masa corporal es: " +imc)
