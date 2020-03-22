// Estructuras repetitivas: For

var rodcko = {
    nombre: 'Rodcko',
    apellido: 'Haz',
    edad: 27,
    peso: 75
}

console.log(`Al inicio del año ${rodcko.nombre} pesa ${rodcko.peso}kg` )

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

// Recordemos que el objeto se va a modificar, pero si quisieramos manterlo, deberíamos de crear otro objeto
for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(rodcko)
    } else if (random < 0.5){
        adelgazar(rodcko)
    }
}

console.log(`Al final del año ${rodcko.nombre} pesa ${rodcko.peso.toFixed(1)}kg`) // toFixed quita decimales
