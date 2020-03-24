// Reducir un array a un valor

// Transformar un array

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    altura: 1.80,
    cantidadDeLibros: 10
}

var pepito = {
    nombre: 'Pepito',
    apellido: 'Abzum',
    altura: 1.65,
    cantidadDeLibros: 15
}

var josue = {
    nombre: 'Josue',
    apellido: 'Barrios',
    altura: 1.75,
    cantidadDeLibros: 20
}

var fernanda = {
    nombre: 'Fernanda',
    apellido: 'Ruano',
    altura: 1.62,
    cantidadDeLibros: 25
}

const esAlta = ({ altura }) => altura > 1.7

var personas = [rodcko, pepito, josue, fernanda]
var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100 // Si queremos retornar un objeto, en una arrow function, debemos de colocar antes del cuerpo en llaves, parentesis y ya interpreta que retorna un objeto
})


// Map ejecuta algo por cada elemento del arreglo y genera un nuevo array con los elementos modificados
var personasCms = personas.map(pasarAlturaACms)

// recibe un acumulador y el objeto
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)