// Escribe un programa que le pida un número al usuario e imprima en la consola si el número 
// si es mayor, menor o igual que 10.
// Si el número es menor a 10 debe imprimir "El número es menor que 10".
// Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
// Si el número es igual a 10 debe imprimir "El número es igual a 10".


let incomingNumber = 8 //parseInt(prompt("Ingrese por favor el número"));

switch (true) {
    case incomingNumber  > 10  :
        console.log('el número es mayor a 10');
        break;
    case incomingNumber  = 10  :
        console.log('el número es igual a 10');
        break;
    
    case incomingNumber  < 10  :
        console.log('el número es menor a 10');
        break;    
}
