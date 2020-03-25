// Callbacks
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy, ${persona.name} `) // Los arguments lo tienen todas las funciones y nos devuelve los parametros que tiene una función

}

$.get(lukeUrl, opts, onPeopleResponse) // Se esta pasando la función como parametro

// Callback es una funcion que se va a ejecutar en algun futuro, pero no sabemos cuando, solo get
