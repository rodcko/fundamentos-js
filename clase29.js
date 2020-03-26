// Callbacks
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy ${persona.name} `) // Los arguments lo tienen todas las funciones y nos devuelve los parametros que tiene una función

}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` // Cambiamos el id para que sea parametrizable
    $.get(url, opts, onPeopleResponse) // Se esta pasando la función como parametro
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3) // No llegan en el mismo orden, eso es asincronismo