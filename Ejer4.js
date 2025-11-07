// Ejercicio 4: Sistema de figuras geométricas

class figura 
{
    constructor(color) 
    {
        this.color = color;
    }
    
    area() 
    {
        return 0;
    }
}


class rectangulo extends figura 
{
    constructor(color, base, altura) 
    {
        super(color);
        this.base = base;
        this.altura = altura;
    }
    
    area() 
    {
        return this.base * this.altura;
    }
}


class circulo extends figura 
{
    constructor(color, radio) 
    {
        super(color);
        this.radio = radio;
    }
    
    area() 
    {
        return 3.14 * this.radio * this.radio;
    }
}

const circulo1 = new circulo("azul", 7);
const rectangulo1 = new rectangulo("blanco", 5, 10);


console.log("Circulo " + circulo1.color + ", Area: " + circulo1.area());
console.log("Rectangulo " + rectangulo1.color + ", Area: " + rectangulo1.area());

