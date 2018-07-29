let axios = require('axios')

const getClima = async(lat,lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e4906313d53caae6de1e920990f7269d`)
    return respuesta.data.main.temp
}

module.exports = {
    getClima
}