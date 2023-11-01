const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

function priceIva() {
    rl.question("Ingrese un precio o escriba 'salir' para finalizar el programa: ", (entrada)=>{
        if (entrada.toLowerCase() === 'salir') {
            rl.close();
        } else {
            iva = entrada * 0.13;
            console.log(`El total con iva es: ${iva}`);
        }
        priceIva();
    });
}
priceIva();
