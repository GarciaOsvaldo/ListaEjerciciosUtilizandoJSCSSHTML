const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, //aqui definimos la entrada o lo que el usuario ingrese
    output: process.stdout //definimos la salida
});

rl.question("Ingrese una lista de números separados:", function(entrada){
    const numeros = entrada.split(" ").map(Number);
    const NumPares = numeros.filter(numero => numero % 2 === 0);
    console.log("Los numeros pares del user: ", NumPares);
    rl.close();
});