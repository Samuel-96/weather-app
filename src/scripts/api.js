import { gradosSeleccionados } from "./eventos";
import { crearTarjetaPrevision, activarOverlay, crearTarjetaTiempo, desactivarOverlay, mostrarLoader, mostrarVentanaError, ocultarLoader } from "./elementosDOM";
import { ubicacion } from ".";

const claveAPI = "b819efaed2101d40c74f6cb81dd7e293";
const idiomaUsuario = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
let latitud, longitud;

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
            //const prevision = await obtenerPrevision(tiempo.name);

            const misDatos = {
                city: tiempo.name,
                estadoClima: tiempo.weather[0].main,
                icono: await obtenerIcono(tiempo.weather[0].icon),
                descripcionClima: tiempo.weather[0].description,
                temperaturaActual: tiempo.main.temp,
                temperaturaMinima: tiempo.main.temp_min,
                temperaturaMaxima: tiempo.main.temp_max
              };
              desactivarOverlay();
              crearTarjetaTiempo(misDatos);
        } 
        else {
            mostrarVentanaError("No se ha encontrado la ciudad introducida");
        }
        
    } 
    //MANEJO DE ERRORES, ALGO HA IDO MAL CON LA REQUEST
    else{
        if(ciudadObtenida.status == "401"){
            mostrarVentanaError("Fallo con la clave API");
        }
        if(ciudadObtenida.status == "429"){
            mostrarVentanaError("Límite de solicitudes a la API excedido");
        }
        if(ciudadObtenida.status == "500" || ciudadObtenida.status == "502" || ciudadObtenida.status == "503" || ciudadObtenida.status == "504"){
            mostrarVentanaError("Problema con OpenWeatherMap.org");
        }
        
    }
}

async function obtenerLocalizacion(){
    const successCallback = async (position) => {
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;
        console.log(latitud, longitud);
        const datosTiempo = await obtenerDatos(latitud, longitud);
        const misDatos = {
            city: datosTiempo.name,
            estadoClima: datosTiempo.weather[0].main,
            icono: await obtenerIcono(datosTiempo.weather[0].icon),
            descripcionClima: datosTiempo.weather[0].description,
            temperaturaActual: datosTiempo.main.temp,
            temperaturaMinima: datosTiempo.main.temp_min,
            temperaturaMaxima: datosTiempo.main.temp_max
          };
          ocultarLoader();
          desactivarOverlay();
          crearTarjetaTiempo(misDatos);
          
      };
      
      const errorCallback = (error) => {
        ocultarLoader();
        desactivarOverlay();
        return;
      };
      activarOverlay();
      mostrarLoader();
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      
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

async function obtenerPrevision(ciudad) {
    //NO FUNCIONA LA PREVISION PORQUE LA API NO ENCUENTRA BIEN CIUDADES COMO ALICANTE O PETRER
    /*
    const url = "http://api.weatherapi.com/v1/forecast.json?key=58eff98293694f7d81981642230310 &q=" + ciudad + "&days=3&aqi=no&alerts=no"
    const datosPrevision = await fetch(url, { mode: "cors" });
    const datosPrevisionJson = await datosPrevision.json();
    const previsionDia1 = datosPrevisionJson.forecast.forecastday[1];
    const previsionDia2 = datosPrevisionJson.forecast.forecastday[2];
    const datosDia1 = {
        fecha: previsionDia1.date,
        temp: previsionDia1.day.avgtemp_c,
        minTemp: previsionDia1.day.mintemp_c,
        maxTemp: previsionDia1.day.maxtemp_c,
        estadoClima: previsionDia1.day.condition.text,
        icono: previsionDia1.day.condition.icon,
    };
    const datosDia2 = {
        fecha: previsionDia2.date,
        temp: previsionDia2.day.avgtemp_c,
        minTemp: previsionDia2.day.mintemp_c,
        maxTemp: previsionDia2.day.maxtemp_c,
        estadoClima: previsionDia2.day.condition.text,
        icono: previsionDia2.day.condition.icon,
    };
    
    
    crearTarjetaPrevision(datosDia1);
    crearTarjetaPrevision(datosDia2);
    
    console.log(previsionDia1);
    console.log(previsionDia2);
    */
    
}

export {obtenerLocalizacion, obtenerTiempo, idiomaUsuario};