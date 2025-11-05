//Ejercicio 3: Reproductor de Música
const prompt = require("prompt-sync")();

function Reproductor() 
{
  this.estado = "Detenido";

  this.play = function() 
  {
    if (this.estado === "Detenido" || this.estado === "Pausado") 
    {
      this.estado = "Reproduciendo";
      return "Reproduciendo musica...";
    } 
    else 
    {
      return "Ya se esta reproduciendo musica";
    }
  };

  this.pausar = function() 
  {
    if (this.estado === "Reproduciendo") 
    {
      this.estado = "Pausado";
      return "Musica pausada";
    } 
    else 
    {
      return "No hay musica reproduciendose";
    }
  };

  this.detener = function() 
  {
    this.estado = "Detenido";
    return "Musica detenida";
  };
}

let miReproductor = new Reproductor();

console.log(miReproductor.play());
console.log(miReproductor.pausar());
console.log(miReproductor.play());
console.log(miReproductor.detener());
console.log(miReproductor.pausar());
