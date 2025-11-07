// Ejercicio 3: Sistema de productos electrónicos

class producto 
{
    constructor(nombre, precio, marca) 
    {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    
    descripcion() 
    {
        return this.nombre + ", " + this.marca + ", " + this.precio;
    }
}


class telefono extends producto 
{
    constructor(nombre, precio, marca, almacenamiento, ram) 
    {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    
    descripcion() 
    {
        return this.nombre + ", " + this.marca + ", " + this.precio + ", " + this.almacenamiento + " Gb, " + this.ram + " Gb Ram";
    }
}


class laptop extends producto 
{
    constructor(nombre, precio, marca, procesador, pulgadas) 
    {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    
    descripcion() 
    {
        return this.nombre + ", " + this.marca + ", " + this.precio + ", " + this.procesador + ", " + this.pulgadas + " pulg";
    }
}


const tel1 = new telefono("Nothing Phone 4", 4500000, "Nothing", 256, 12);
const lap1 = new laptop("Macbook Pro", 8000000, "Apple", "M5", 14);


console.log(tel1.descripcion());
console.log(lap1.descripcion());

