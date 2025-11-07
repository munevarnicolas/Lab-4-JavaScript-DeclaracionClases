// Ejercicio 5: Sistema de animales

class animal 
{
    constructor(nombre, edad) 
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    emitirSonido() 
    {
        return "El animal hace un sonido";
    }
}


class perro extends animal 
{
    constructor(nombre, edad)
    {
        super(nombre, edad);
    }
    
    emitirSonido() 
    {
        return "Guauuuuuu";
    }
}


class gato extends animal 
{
    constructor(nombre, edad) 
    {
        super(nombre, edad);
    }
    
    emitirSonido() 
    {
        return "Miauuuuuu";
    }
}


const perro1 = new perro("Boky", 3);
const gato1 = new gato("Lazy", 2);


console.log(perro1.nombre + ": " + perro1.emitirSonido());
console.log(gato1.nombre + ": " + gato1.emitirSonido());
