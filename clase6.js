// Objetos
var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    edad: 28
}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Abzum',
    edad: 29
}

// Acá solo recibimos como parametro, la propiedad que queremos del objeto
function imprimirNombreEnMayusculas({ nombre }) { 
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(rodcko)
imprimirNombreEnMayusculas(pepe)

// Definir un nuevo objeto, desde la función
imprimirNombreEnMayusculas({ nombre: 'Pepito' })

// Da error, porque le mandamos la propiedad equivocada, espera el nombre
imprimirNombreEnMayusculas({ apellido: 'XD' })
