// Como funcionan las clases en JavaScript

function Persona(nombre, apellido, altura) {
    this.nombre = nombre, // this.nombre es un atributo y el nombre se recibe desde un parametro
    this.apellido = apellido,
    this.altura = altura,
    this.edad = 20 // Podemos setear ya valores y que todos los objetos lo tengan o bien lo podemos configurar como parametro
    // implicitamente returna el objeto
}

// Crear una funcion para el prototipo Persona
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Creacion de funcion imprimirSiEsAlto
Persona.prototype.soyAlto = function () {
    if(this.altura >= 1.70) {
        console.log(`Soy una persona alta, porque mido: ${this.altura} mts :D`)
    } else {
        console.log(`Soy bajito :()`)
    }
}

var rodcko = new Persona('Rodcko', 'Haz', '1.8') // Creamos un nuevo objeto en base al prototipo person "por decirlo así una clase"
// Creamos mas objetos 
var josue = new Persona('Josue', 'Barrios')
var pepito = new Persona('Pepito', 'Abzum')


// Llamando la funcion
rodcko.saludar()

// Agregar la altura que se tiene que pasar al constructor
// también agregar la función de soyAlto y va a imprimir
// si es alto o no, si mide mas de 1.7mts