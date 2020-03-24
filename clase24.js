// La verdad oculta sobre las clases en JavaScript
// "Herencia prototipal"
// Para simular la herencia, hacemos una funcion nuestra

function heredaDe(prototipoHijo, prototipoPadre) {
    // Primero le decimos quien es su prototipo padre
    var fn = function () {} // funcion dummy
    fn.prototype = prototipoPadre.prototype
    // Al prototipo hijo, le vamos a decir que su prototype es un nuevo objeto de la funcion que acabamos de crear
    prototipoHijo.prototype = new fn
    // Asignar la funcion constructora
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre, // this.nombre es un atributo y el nombre se recibe desde un parametro
    this.apellido = apellido,
    this.altura = altura,
    this.edad = 20 // Podemos setear ya valores y que todos los objetos lo tengan o bien lo podemos configurar como parametro
    // implicitamente returna el objeto
}

// Crear una funcion para el prototipo Persona
Persona.prototype.saludar =  function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Es muy importante donde colocamos las funciones del prototipo, se recomienda colocarlas juntas
Persona.prototype.soyAlto = function () {
    return this.altura > 1.8 // Cambia el this dentro de la funcion y lo apunta afuera (window)
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
}

// Se tiene que declarar el mecanismo de herencia, despues de la funcion
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador@`)
}





//var rodcko = new Persona('Rodcko', 'Haz', '1.8') // Creamos un nuevo objeto en base al prototipo person "por decirlo así una clase"
//var josue = new Persona('Josue', 'Barrios', '1.5')
//var pepito = new Persona('Pepito', 'Abzum', '1.65')

rodcko.soyAlto()
josue.soyAlto()
pepito.soyAlto()

// Simpre declarar las funciones hasta arriba, para que sean accesibles y evitar errores


