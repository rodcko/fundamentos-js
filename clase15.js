// Estructuras repetitivas: do-while
var contador = 0

const llueve = () => Math.random()<0.25

do{
    contador++
} while(!llueve())

console.log(`Fui a ver si llovia ${contador}${contador==1 ? ' vez':' veces'}`)

//console.log(`Fui a ver si llovía ${contador} veces`)

// Reto: corregir el programa, si es 1 que imprima "vez" y sino "veces"