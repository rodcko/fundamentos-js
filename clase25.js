// Clases en JavaScript

class Persona {
    constructor (nombre, apellido, altura){ // Metodo constructor
        this.nombre = nombre, 
        this.apellido = apellido,
        this.altura = altura,
        this.edad = 20 
    }

    saludar() { // Agregamos el metodo saludar, sin necesidad de utilizar la palabra function
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona { // Hereda
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador@ :D`)
    }
}



//var rodcko = new Persona('Rodcko', 'Haz', '1.8') // Creamos un nuevo objeto en base al prototipo person "por decirlo así una clase"
//var josue = new Persona('Josue', 'Barrios', '1.5')
//var pepito = new Persona('Pepito', 'Abzum', '1.65')

rodcko.soyAlto()
josue.soyAlto()
pepito.soyAlto()

