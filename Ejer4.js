// Ejercicio 4: Carrito de Compras con Descuentos 
const prompt = require("prompt-sync")();

function Carrito() 
{
  this.productos = []; 
  this.total = 0;     

  this.agregarProducto = function(nombre, precio) 
  {
    this.productos.push({ nombre: nombre, precio: precio });
    this.total += precio;
    console.log("Producto agregado: " + nombre + " (" + precio + ")");
  };


  this.calcularDescuento = function()
   {
    if (this.total > 100) 
    {
      let descuento = this.total * 0.10; // 10%
      let totalConDescuento = this.total - descuento;
      console.log("Total: " + this.total);
      console.log("Descuento del 10% aplicado (-" + descuento + ")");
      console.log("Total con descuento: " + totalConDescuento);
    } 

    else if (this.total > 50 && this.total <= 100) 
    {
      let descuento = this.total * 0.05; // 5%
      let totalConDescuento = this.total - descuento;
      console.log("Total: " + this.total);
      console.log("Descuento del 5% aplicado (-" + descuento + ")");
      console.log("Total con descuento: " + totalConDescuento);
    } 
    else 
    {
      console.log("Total: " + this.total);
      console.log("No aplica descuento.");
    }
  };
}


let miCarrito = new Carrito(); 

miCarrito.agregarProducto("Huevos", 20);
miCarrito.agregarProducto("Leche", 15);
miCarrito.agregarProducto("Arroz", 25);

miCarrito.calcularDescuento();
