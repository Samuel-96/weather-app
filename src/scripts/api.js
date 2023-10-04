import { gradosSeleccionados } from "./eventos";
import { crearTarjetaTiempo } from "./elementosDOM";

const claveAPI = "b819efaed2101d40c74f6cb81dd7e293";
const idiomaUsuario = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
let city, estadoClima, icono, descripcionClima, temperaturaActual, temperaturaMinima, temperaturaMaxima;

async function obtenerTiempo(ciudad){
    const url = "https://api.openweathermap.org/geo/1.0/direct?q=" + ciudad + "&limit=1&appid=" + claveAPI + "";
    
    const ciudadObtenida = await fetch(url, {mode: 'cors'});
    
    if(ciudadObtenida.ok){
        
        const ciudadJson = await ciudadObtenida.json();
        
        //ya tenemos los datos, comprobamos si hay ciudad
        if(ciudadJson.length > 0){
            const lat = ciudadJson[0].lat;
            const lon = ciudadJson[0].lon;
            
            const tiempo = await obtenerDatos(lat, lon);
            let misDatos = [];
            
            city = tiempo.name; 
            misDatos.push(city);

            estadoClima = tiempo.weather[0].main;
            misDatos.push(estadoClima);

            icono = await obtenerIcono(tiempo.weather[0].icon);
            misDatos.push(icono);

            descripcionClima = tiempo.weather[0].description;
            misDatos.push(descripcionClima);

            temperaturaActual = tiempo.main.temp;
            misDatos.push(temperaturaActual);

            temperaturaMinima = tiempo.main.temp_min;
            misDatos.push(temperaturaMinima);

            temperaturaMaxima = tiempo.main.temp_max;
            misDatos.push(temperaturaMaxima);

            crearTarjetaTiempo(misDatos);
        } 
        else {
            console.log("ciudad no encontrada");
        }
        
    } 
    //MANEJO DE ERRORES, ALGO HA IDO MAL CON LA REQUEST
    else{
        if(ciudadObtenida.status == "401"){
            console.log("Fallo en la clave API")
        }
        if(ciudadObtenida.status == "429"){
            console.log("Límite de solicitudes a la API excedido")
        }
        if(ciudadObtenida.status == "500" || ciudadObtenida.status == "502" || ciudadObtenida.status == "503" || ciudadObtenida.status == "504"){
            console.log("Problema con openweathermap.org")
        }
        
    }
}

async function obtenerDatos(latitud, longitud){
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=" + claveAPI + "&lang=" + idiomaUsuario + "&units=" + gradosSeleccionados + "";
    const datosTiempo = await fetch(url, {mode: 'cors'});
    const datosTiempoJson = await datosTiempo.json();
    return datosTiempoJson;
}

async function obtenerIcono(codigoIcono){
    const url = "https://openweathermap.org/img/wn/" + codigoIcono + "@2x.png";
    return url;
}

export {obtenerTiempo};