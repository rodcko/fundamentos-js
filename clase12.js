// Arrow functions

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

// Podemos asignarle a una variable una funcion y luego, invocarla, a esto se le llama Arrow function / funciones declarativas / funciones anonimas
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

// Otra forma de escribirlo es así
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD // Si solo retorna algo la funcion, se puede quitar el return y los parentesis, para resumirla aún mas

// Podemos destructurar la funcion
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD // Si solo retorna algo la funcion, se puede quitar el return y los parentesis, para resumirla aún mas

// Reto
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD


// La forma de invocarla es la misma
function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

// Reto: crear una funcion esMenorDeEdad como arrow function y que retorne la negacion de la llamada a mayorDeEdad
