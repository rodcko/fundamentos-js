// Manejo de errores con callbacks
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` // Cambiamos el id para que sea parametrizable
    
    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    }) // Metodo fail, se ejecuta si hubiera algun error
}

// Vamos a ordenar, como ir obteniendo los personajes
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje){
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
}) 
// Se hacen los request en serie

// Esto se le llama el "callback hell", vamos a empezar que nuestro codigo será horizontal en vez de vertical
