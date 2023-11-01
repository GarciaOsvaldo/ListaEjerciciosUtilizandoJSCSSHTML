const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatearNombreCompleto(nombreCompleto) {
  const nameParts = nombreCompleto.trim().split(' ');
  if (nameParts.length >= 2) {
    const firstName = nameParts[1];
    const lastName = nameParts[2];
    return `${firstName} ${lastName}`;
  } 
}

rl.question('Ingrese su nombre completo: ', (nombreCompleto) => {
  const formattedName = formatearNombreCompleto(nombreCompleto);
  console.log(`Nombre formateado: ${formattedName}`);
  rl.close();
});


