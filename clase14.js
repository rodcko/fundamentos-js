// Estructuras repetitivas: while

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    edad: 27,
    peso: 75
}

console.log(`Al inicio del año ${rodcko.nombre} pesa ${rodcko.peso}kg` )

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = rodcko.peso - 3
var dias = 0

// El codigo entre llaves se repite siempre que la condicion se cumpla
while (rodcko.peso > META) {
    debugger // debugear nuestro programa
    if (comeMucho()) {
        aumentarDePeso(rodcko)
    }
    if (realizaDeporte()) { 
        adelgazar(rodcko)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${rodcko.nombre} adelgazó 3kg`)