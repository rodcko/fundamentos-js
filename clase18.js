// Filtrar un array

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    altura: 1.80
}

var pepito = {
    nombre: 'Pepito',
    apellido: 'Abzum',
    altura: 1.65
}

var josue = {
    nombre: 'Josue',
    apellido: 'Barrios',
    altura: 1.75
}

var fernanda = {
    nombre: 'Fernanda',
    apellido: 'Ruano',
    altura: 1.62
}

const esAlta = ({ altura }) => altura > 1.7

var personas = [rodcko, pepito, josue, fernanda]
var personasAltas = personas.filter(esAlta)

// Es equivalente que lo de arriba
//var personasAltas = personas.filter(function (persona) {
//    return persona.altura > 1.7
//})

console.log(personasAltas)

// Reto: escribir el filtrado de personas bajas
const esBaja = ({ altura }) => altura <= 1.7
var personasBajas = personas.filter(esBaja)

console.log(personasBajas)
