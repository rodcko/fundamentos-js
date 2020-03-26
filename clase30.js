// Manejando el orden y el asincronismo en javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` // Cambiamos el id para que sea parametrizable
    
    $.get(url, opts, function (persona) {
        console.log(`Hola yo soy ${persona.name}`) 

        if (callback) { // Llamamos el callback
            callback()
        }
    })
}

// Vamos a ordenar, como ir obteniendo los personajes
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function (){
                    obtenerPersonaje(6, function (){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
}) // Se hacen los request en serie

// Esto se le llama el "callback hell", vamos a empezar que nuestro codigo será horizontal en vez de vertical

