// Desestructurar objetos

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    edad: 28
}

function imprimirNombreEnMayusculas(persona) { 
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(rodcko)

// Reto: realizar una funcion que imprima el nombre y edad de un objeto
// Hola, me llamo Rodcko y tengo 28 años

function saludoNombreEdad(humano) {
    var { nombre } = humano
    var { edad } = humano
    console.log("Hola, me llamo " + nombre + " y tengo " + edad + " annios... :D")
}

saludoNombreEdad(rodcko)