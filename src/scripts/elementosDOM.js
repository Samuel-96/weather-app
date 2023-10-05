import { idiomaUsuario } from "./api";

function crearTarjetaTiempo(misDatosTiempo){

    const infoTiempo = document.querySelector(".info-tiempo"); //Contenedor ppal

    const infoLocalizacion = document.createElement("div");
    infoLocalizacion.classList.add("info-localizacion");

    const contenedorCiudad = document.createElement("div");
    contenedorCiudad.classList.add("contenedor-ciudad");

    const pNombreCiudad = document.createElement("p");
    pNombreCiudad.classList.add("nombre-ciudad");
    pNombreCiudad.textContent = misDatosTiempo.city;
    const imagenTiempo = document.createElement("img");
    imagenTiempo.classList.add("icono-tiempo");
    imagenTiempo.src = misDatosTiempo.icono;
    
    contenedorCiudad.appendChild(pNombreCiudad);
    contenedorCiudad.appendChild(imagenTiempo);

    const contenedorDia = document.createElement("div");
    contenedorDia.classList.add("contenedor-dia");

    const pDiaSemana = document.createElement("p");
    pDiaSemana.classList.add("dia-semana")
    pDiaSemana.textContent = obtenerDia();
    const pTiempo = document.createElement("p");
    pTiempo.classList.add("estado-tiempo");
    pTiempo.textContent = misDatosTiempo.descripcionClima;

    contenedorDia.appendChild(pDiaSemana);
    contenedorDia.appendChild(pTiempo);

    infoLocalizacion.appendChild(contenedorCiudad);
    infoLocalizacion.appendChild(contenedorDia);

    //parte de las temperaturas

    const datosClima = document.createElement("div");
    datosClima.classList.add("datos-clima");

    const contenedorGrados = document.createElement("div");
    contenedorGrados.classList.add("contenedor-grados");

    const pTemperaturaActual = document.createElement("p");
    pTemperaturaActual.classList.add("temp-actual");
    misDatosTiempo.temperaturaActual = String(misDatosTiempo.temperaturaActual);
    misDatosTiempo.temperaturaActual = misDatosTiempo.temperaturaActual.substring(0,2)
    pTemperaturaActual.textContent = misDatosTiempo.temperaturaActual + "°";

    contenedorGrados.appendChild(pTemperaturaActual);

    const contenedorMinimasMaximas = document.createElement("div");
    contenedorMinimasMaximas.classList.add("contenedor-minima-maxima");

    const pMinima = document.createElement("p");
    pMinima.classList.add("temp-minima");
    misDatosTiempo.temperaturaMinima = String(misDatosTiempo.temperaturaMinima);
    misDatosTiempo.temperaturaMinima = misDatosTiempo.temperaturaMinima.substring(0,2);
    pMinima.textContent = "Mínima: " + misDatosTiempo.temperaturaMinima + "°";
    const pMaxima = document.createElement("p");
    pMaxima.classList.add("temp-maxima");
    misDatosTiempo.temperaturaMaxima = String(misDatosTiempo.temperaturaMaxima);
    misDatosTiempo.temperaturaMaxima = misDatosTiempo.temperaturaMaxima.substring(0,2);
    pMaxima.textContent = "Máxima: " + misDatosTiempo.temperaturaMaxima + "°";

    contenedorMinimasMaximas.appendChild(pMinima);
    contenedorMinimasMaximas.appendChild(pMaxima);

    datosClima.appendChild(contenedorGrados);
    datosClima.appendChild(contenedorMinimasMaximas);

    const pHora = document.createElement("p");
    pHora.classList.add("hora-actual");
    pHora.textContent = obtenerHora();

    infoTiempo.appendChild(infoLocalizacion);
    infoTiempo.appendChild(datosClima);
    infoTiempo.appendChild(pHora);

}

function crearTarjetaPrevision(datosDia){
    const contPrevisiones = document.querySelector(".prevision");
    const previsionTitulo = document.querySelector(".titulo-prevision");

    const contenedorPrevisionDia = document.createElement("div");
    contenedorPrevisionDia.classList.add("prevision-dia");

    const imgIcono = document.createElement("img");
    imgIcono.src = datosDia.icono;
    const pEstado = document.createElement("p");
    pEstado.textContent = datosDia.estadoClima;
    const pTemp = document.createElement("p");
    pTemp.textContent = datosDia.temp + "°";

    const divMinimaMaxima = document.createElement("div");
    divMinimaMaxima.classList.add("previsionMinimaMaxima");
    const pMinima = document.createElement("p");
    pMinima.textContent = "Mínima: " + datosDia.minTemp + "°";
    const pMaxima = document.createElement("p");
    pMaxima.textContent = "Máxima: " + datosDia.maxTemp + "°";

    divMinimaMaxima.appendChild(pMinima);
    divMinimaMaxima.appendChild(pMaxima);

    const pFecha = document.createElement("p");
    pFecha.classList.add("prevision-fecha");
    datosDia.fecha = datosDia.fecha.substring(5);
    pFecha.textContent = datosDia.fecha;

    contenedorPrevisionDia.appendChild(imgIcono);
    contenedorPrevisionDia.appendChild(pEstado);
    contenedorPrevisionDia.appendChild(pTemp);
    contenedorPrevisionDia.appendChild(divMinimaMaxima);
    contenedorPrevisionDia.appendChild(pFecha);

    contPrevisiones.appendChild(contenedorPrevisionDia);
    previsionTitulo.style.display = "flex";
    contPrevisiones.style.display = "flex";
}

function limpiarInfoPrevision(){
    const contPrevisiones = document.querySelector(".prevision");
    contPrevisiones.innerHTML = "";
}

function obtenerDia(){
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dia = new Date().getDay();

    if(idiomaUsuario == "es"){
        return diasSemana[dia];
    } else{
       return weekDays[dia];
    }
}

function añadirCeros(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function obtenerHora(){
    const d = new Date();
    let hora = añadirCeros(d.getHours());
    let minuto = añadirCeros(d.getMinutes());
    let time = hora + ":" + minuto;
    return time;
}

function limpiarInfoTiempo(){
    const infoTiempo = document.querySelector(".info-tiempo"); 
    infoTiempo.innerHTML = "";
}

function mostrarLoader(){
    activarOverlay();
    const loader = document.querySelector(".loader");
    loader.style.visibility = "visible";
}

function ocultarLoader(){
    const loader = document.querySelector(".loader");
    loader.style.visibility = "hidden";
}

function activarOverlay(){
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "block";
}

function desactivarOverlay(){
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
}

function mostrarVentanaError(mensajeError){
    activarOverlay();
    const ventanaError = document.querySelector(".ventana-error");
    const mensaje = document.querySelector(".mensaje");
    mensaje.textContent = mensajeError;
    ventanaError.style.visibility = "visible";
}

function cerrarVentanaError(){
    const ventanaError = document.querySelector(".ventana-error");
    ventanaError.style.visibility = "hidden";
    desactivarOverlay();
}

export {crearTarjetaTiempo, desactivarOverlay, limpiarInfoPrevision, limpiarInfoTiempo, mostrarLoader, ocultarLoader, mostrarVentanaError, cerrarVentanaError, crearTarjetaPrevision};