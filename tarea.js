const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,//entradas de datos
  output: process.stdout // salida de datos
});
//crear arreglo donde se va a almacenar las tareas ingresadas
const tasks = [];
//crear función para agregar tareas
function addTask() {
  rl.question('Ingrese una tarea o escriba "salir" para finalizar el programa: ', (entrada) => {
    if (entrada.toLowerCase() === 'salir') {
      rl.close();
    } else {
      tasks.push(entrada);
      //for para mostrar los datos ingresados en el arreglo
      console.log('Tareas ingresadas:');
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i+1} : ${tasks[i]}`);
      }
      //fin for
      addTask();//metodo para volver a ingresar más tareas
      
    }
  });
}

addTask();