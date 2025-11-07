//Ejercicio 1: Sistema básico de vehículos

class Vehiculo 
{
    constructor(marca, modelo, año) 
    {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    
    obtenerDetalles()
    {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año;
    }
}


class Carro extends Vehiculo 
{
    constructor(marca, modelo, año, numeroPuertas) 
    {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }
    
    obtenerDetalles() 
    {
        return super.obtenerDetalles() + ", Numero de puertas: " + this.numeroPuertas;
    }
}

class Moto extends Vehiculo 
{
    constructor(marca, modelo, año, cilindrada) 
    {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    
    obtenerDetalles()
    {
        return super.obtenerDetalles() + ", Cilindrada: " + this.cilindrada + "cc";
    }
}


const carro1 = new Carro("Volkswagen", "Virtus", 2020, 4);
const moto1 = new Moto("Honda", "XBlade", 2022, 150);

console.log(carro1.obtenerDetalles());
console.log(moto1.obtenerDetalles());
