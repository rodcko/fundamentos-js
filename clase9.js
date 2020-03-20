// Comparaciones en Javascript
// Valores primitivos
var x = 4, y = '4'
// x == y, llevar a comparar los valores por el dato, no por el tipo
// x === y, compara que sea tanto por el dato y el tipo
// Good practice: utilizar siempre el "===" para validar exactamente

// Comparar objetos
var rodcko = {
    nombre: 'Rodcko'
}

var otraPersona = {
    nombre: 'Rodcko'
}

// Si damos == en un objeto, pregunta por la referencia a la variable que estamos utilizando
// Pero tenemos que hacer referencia a la variable, es decir, apuntar al mismo valor de memoria que el otro objeto (en memoria ram), así:
// Ahí si nos da true tanto con == como con ===
var otraPersona = rodcko 

// Desglozamos el objeto, de igual forma nos da false, porque ese es un nuevo objeto y apunta a otro espacio en memoria ram
var otraPersona2 = {
    ...rodcko
}

// De igual forma, si hicieramos referencia al mismo lugar de memoria ram y cambiamos el contenido a uno de los objetos, en ambos se cambia, y seguiría siendo igual
