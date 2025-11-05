// Ejercicio 1: Libro
const prompt = require("prompt-sync")();

const libro = 
{
  titulo: "Maria",
  autor: "Jorge Isaacs",
  prestado: false, 


  prestar: function() 
  {
    if (libro.prestado === false) 
    {
      libro.prestado = true;
      console.log("El libro " + libro.titulo + " ha sido prestado satisfactoriamente");
    } 
    else 
    {
      console.log("Error, el libro " + libro.titulo + " ya esta prestado");
    }
  }
};

libro.prestar();
libro.prestar(); 
