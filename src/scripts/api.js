const claveAPI = "b819efaed2101d40c74f6cb81dd7e293";
const idiomaUsuario = (navigator.language || "en").slice(0, 2);

async function obtenerTiempo(ciudad) {
    const url = new URL("https://api.openweathermap.org/geo/1.0/direct");

    url.search = new URLSearchParams({
        q: ciudad,
        limit: 5,
        appid: claveAPI
    });

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const ciudadesJson = await respuesta.json();

    if (ciudadesJson.length === 0) {
        return null;
    }

    return ciudadesJson.map(ciudad => ({
        nombre: ciudad.name,
        region: ciudad.state || null,
        pais: ciudad.country,
        latitud: ciudad.lat,
        longitud: ciudad.lon
    }));
}

async function obtenerLocalizacion(unidades) {

    const posicion = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });

    const datosTiempo = await obtenerDatosTiempo(posicion.coords.latitude, posicion.coords.longitude, unidades);

    const tiempo = crearObjetoTiempo(datosTiempo, posicion.coords.latitude, posicion.coords.longitude);

    return tiempo;

}

function crearObjetoTiempo(datosTiempo, latitud, longitud) {
    return {
        city:              datosTiempo.name,
        estadoClima:       datosTiempo.weather[0].main,
        icono:             obtenerIcono(datosTiempo.weather[0].icon),
        descripcionClima:  datosTiempo.weather[0].description,
        temperaturaActual: datosTiempo.main.temp,
        temperaturaMinima: datosTiempo.main.temp_min,
        temperaturaMaxima: datosTiempo.main.temp_max,
        latitud:           latitud,
        longitud:          longitud
    }
}

async function obtenerDatosTiempo(latitud, longitud, unidades) {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");

    url.search = new URLSearchParams({
        lat: String(latitud),
        lon: String(longitud),
        appid: claveAPI,
        lang: idiomaUsuario,
        units: unidades
    });

    const datosTiempo = await fetch(url);

    if (!datosTiempo.ok) {
        throw new Error(`Error HTTP: ${datosTiempo.status}`);
    }

    const datosTiempoJson = await datosTiempo.json();

    return datosTiempoJson;
}

function obtenerIcono(codigoIcono) {
    return "https://openweathermap.org/img/wn/" + codigoIcono + "@2x.png";
}

async function obtenerTiempoUbicacion(ubicacion, unidades) {
    const datosTiempo = await obtenerDatosTiempo(
        ubicacion.latitud,
        ubicacion.longitud,
        unidades
    );

    const tiempo = crearObjetoTiempo(
        datosTiempo,
        ubicacion.latitud,
        ubicacion.longitud
    );

    tiempo.nombreCiudad = ubicacion.nombre;
    tiempo.region = ubicacion.region;
    tiempo.pais = ubicacion.pais;

    return tiempo;
}

export {
    obtenerLocalizacion,
    obtenerDatosTiempo,
    idiomaUsuario,
    obtenerTiempo,
    obtenerTiempoUbicacion,
    crearObjetoTiempo
};
