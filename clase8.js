// Parametros como referencia o como valor

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
// Si modificamos un objeto dentro de la función, es pasar un parametro por referencia, y va a cambiar fuera de la función
function cumpleanos(persona) {
    persona.edad += 1
}

// Modificar lo de un objeto anterior y retornar uno nuevo
function cumpleanos2(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

// Acá tendríamos tanto el objeto con el valor original (rodcko) y el objeto modificado (rodckoMasViejo)
var rodckoMasViejo = cumpleanos2(rodcko)

