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

var pepito = {
    nombre: 'Pepito',
    edad: 15
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de drone')
    }
}

imprimirProfesiones(rodcko)

// Desafio: escribir una funcion imprimirSiEsMayorDeEdad va a recibir una persona y que imprima:
// Rodcko es mayor de edad o Rodcko es menos de edad, de acuerdo a la edad, mayoria de edad a partir de 18 años

function imprimirSiEsMayorDeEdad(humano) {
    console.log(`${humano.nombre} es:`)
    if(humano.edad >= 18) {
        console.log('mayor de edad, porque tiene ' + humano.edad + ' annios')   
    } else {
        console.log('menor de edad, porque tiene ' + humano.edad + ' annios')   
    }
}

imprimirSiEsMayorDeEdad(rodcko)