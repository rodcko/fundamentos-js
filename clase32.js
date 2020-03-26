// Promesas
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` // Cambiamos el id para que sea parametrizable
        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}


function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id} `)
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError) //Llamamos la funcion que queremos utilizar, no la estamos pasando como parametro
