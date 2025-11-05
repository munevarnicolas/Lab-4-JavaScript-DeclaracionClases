// Ejercicio 2: Lista de Compras (usando this)
const prompt = require("prompt-sync")();

function ListaCompras() 
{
  this.productos = []; 

  this.agregar = function(producto) 
  {
    this.productos.push(producto); 
  };

  this.mostrar = function() 
  {
    console.log("Lista de Compras: ");
    for (let i = 0; i < this.productos.length; i++) 
    {
      console.log((i + 1) + ") " + this.productos[i]);
    }
  };
}

let miLista = new ListaCompras();

miLista.agregar("Huevos");
miLista.agregar("Leche");
miLista.agregar("Arroz");

miLista.mostrar();
