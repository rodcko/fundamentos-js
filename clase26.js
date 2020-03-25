// Funciones como parámetros

class Persona {
    constructor (nombre, apellido, altura){ // Metodo constructor
        this.nombre = nombre, 
        this.apellido = apellido,
        this.altura = altura,
        this.edad = 20 
    }

    saludar(fn) { // Recibimos como parametro la funcion
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) { // Preguntamos si nos pasaron una funcion
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona { // Hereda
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        // var nombre =  this.nombre
        // var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador@ :D`)
        if (fn) { // Preguntamos si nos pasaron una funcion
            fn(nombre, apellido, true)
        }
    } 
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabía que eras desarrollador@`)
    }
}

var rodcko = new Persona('Rodcko', 'Haz', '1.8') // Creamos un nuevo objeto en base al prototipo person "por decirlo así una clase"
var josue = new Persona('Josue', 'Barrios', '1.5')
var pepito = new Desarrollador('Pepito', 'Abzum', '1.65')

rodcko.saludar() // Es opcional si no recibe el parametro, de cualquier modo, tiene que seguir funcionando
josue.saludar(responderSaludo)
pepito.saludar(responderSaludo)

