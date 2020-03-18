// Alcance de las funciones
var nombre = 'Rodcko' // Variable global

function imprimirNombreEnMayusculas(nombre) { // Esta variable, es solo local para la función (n)
    nombre = nombre.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas()

nombre // en este punto ya esta como RODCKO

// Si una variable no se usa en una función (alcance local), podemos acceder a ella a tráves del alcance global, por medio de window