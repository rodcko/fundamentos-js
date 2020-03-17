// Variables - Strings
var nombre = 'Rodcko', apellido = 'Haz'

// Cambiar un string a mayusculas
var nombreEnMayusculas = nombre.toUpperCase()

// Cambiar un string a minusculas
var apellidoEnMinusculas = apellido.toLowerCase()

// Imprime la primer letra de un string y respeta si esta en mayusculas/minusculas
var primeraLetraDelNombre = nombre.charAt(0)

// Cantidad de letras de un string
var cantidadDeLetrasDelNombre = nombre.length

// Concatenar 2 strings
var nombreCompleto = nombre + ' ' + apellido

// Concatenar de otra forma y solo uno de los string, convertirlo a mayusculas
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// Hacer un substring y extraer una cantidad de caracteres a partir de un punto
var str = nombre.substr(1, 2)