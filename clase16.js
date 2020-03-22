// Condicional múltiple: switch
// Le pregunta al usuario y lo almacena en una variable
var signo = prompt('¿Cual es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Horoscopo de acuario')
        break
    case 'piscis':
        console.log('Horoscopo de piscis')
        break
    // Se pueden agregar 2 posibles escenarios que ejecuten lo mismo
    case 'cancer':
    case 'cáncer':
        console.log('Horoscopo de cancer')
        break
    case 'capricornio':
        console.log('Horoscopo de capricornio')
        break
    case 'sagitario':
        console.log('Horoscopo de sagitario')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break

}

console.log(signo)