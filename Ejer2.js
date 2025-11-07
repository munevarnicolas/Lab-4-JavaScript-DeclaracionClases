// Ejercicio 2: Sistema de empleados

class empleado 
{
    constructor(nombre, edad, salarioBase) 
    {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    
    calcularSalario() 
    {
        return this.salarioBase;
    }
}

class gerente extends empleado 
{
    constructor(nombre, edad, salarioBase, bonificacion) 
    {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
    
    calcularSalario() 
    {
        return this.salarioBase + this.bonificacion;
    }
}


class desarrollador extends empleado 
{
    constructor(nombre, edad, salarioBase, lenguaje) 
    {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    
    calcularSalario() 
    {
        return this.salarioBase;
    }
}


const empleado1 = new empleado("Nicolas", 25, 1000000);
const gerente1 = new gerente("Antonia", 30, 2000000, 500000);
const desarrollador1 = new desarrollador("Dilan", 22, 1500000, "Java");


console.log(empleado1.nombre + ", Salario: " + empleado1.calcularSalario());
console.log(gerente1.nombre + ", Salario: " + gerente1.calcularSalario());
console.log(desarrollador1.nombre + ", Salario: " + desarrollador1.calcularSalario() + ", Lenguaje: " + desarrollador1.lenguaje);
