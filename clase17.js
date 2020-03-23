// Introduccion a arrays

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

var personas = [rodcko, pepito, josue, fernanda]

// Ver todo el arreglo
personas

// Ubicar un elemento del arreglo
personas[0] // Se desplegaria el primer elemento, según el subindice

// Ver un atributo de un elemento del arreglo
personas[0].altura
personas[0]['altura'] // Ambas maneras son equivalentes


// Recorrer el array e imprimir la altura de cada elemento

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

