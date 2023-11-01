const boton = document.getElementById("btn");
const parrafo = document.getElementById("parrafo");

const colores =["red", "blue", "black", "yellow", "orange", "pink", "purple"];

boton.addEventListener("click", CambiarColor);

function CambiarColor(){
    var indice= parseInt(Math.random()*colores.length)
    parrafo.style.color=colores[indice];
}