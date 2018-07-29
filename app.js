

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require ('yargs').options(
    {
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true

        }
    }
).argv

let getInfo = async() => {
    
    try {
        let coors = await lugar.getLugarLatLng( argv.direccion);
        let temperatura = await clima.getClima(coors.lat,coors.lng)
    
        return `El clima en ${coors.direccion} es de ${temperatura}.`
        
    } catch (error) {
        return `No se pudo determinar el clima en ${coors.direccion}`
    }

}

getInfo().then(
    mensaje => console.log(mensaje)
).catch(
    error => console.log('Error',error)
)
