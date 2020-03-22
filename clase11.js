// Funciones que retornan valores

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

// Definir una constante, es decir, que el valor no va a cambiar
const MAYORIA_DE_EDAD = 18 // Es buena practica escribir así las constante, con mayusculas y separacion con guiones bajos

// Funcion que retorne
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}