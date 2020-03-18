var edad = 27

// Incremento
edad = edad + 1
edad += 1

var peso = 75

// Decremento
peso = peso - 2
peso -= 2

var sandwich = 1

peso = peso += sandwich

var jugarAlFutbol = 3

peso = peso -= jugarAlFutbol

// Decimales
var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100
// Tener en cuenta 2 decimales después del punto
var totalStr = total.toFixed(2)
// Convertirlo a numero
var total2 = parseFloat(totalStr)

// Division
var pizza = 8
var personas = 2

var cantidadDePorcionesPorPersona = pizza / personas

