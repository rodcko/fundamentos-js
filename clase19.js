// Transformar un array

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

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100 // Si queremos retornar un objeto, en una arrow function, debemos de colocar antes del cuerpo en llaves, parentesis y ya interpreta que retorna un objeto
})


// Map ejecuta algo por cada elemento del arreglo y genera un nuevo array con los elementos modificados
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

// MAP siempre nos devuelve un nuevo array y no modifica el original
// al menos que, estemos modificando el original, para eso podríamos crear una arrow function y retornar un nuevo objeto
