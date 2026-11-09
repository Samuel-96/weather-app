import { idiomaUsuario } from "./api";

const contenedorResultados = document.querySelector(".resultados-busqueda");

function crearTarjetaTiempo(misDatosTiempo) {

    const infoTiempo = document.querySelector(".info-tiempo");

    // Limpiamos la tarjeta anterior
    infoTiempo.replaceChildren();

    // --------------------------------
    // LOCALIZACIÓN
    // --------------------------------

    const infoLocalizacion = document.createElement("div");
    infoLocalizacion.classList.add("info-localizacion");

    const pNombreCiudad = document.createElement("p");
    pNombreCiudad.classList.add("nombre-ciudad");
    pNombreCiudad.textContent = misDatosTiempo.nombreCiudad || misDatosTiempo.city;

    const pUbicacion = document.createElement("p");
    pUbicacion.classList.add("ubicacion-secundaria");

    const nombresPaises = new Intl.DisplayNames(["es"], {
        type: "region"
    });

    const nombrePais = misDatosTiempo.pais
        ? nombresPaises.of(misDatosTiempo.pais)
        : null;

    const detallesUbicacion = [
        misDatosTiempo.region,
        nombrePais
    ].filter(Boolean);

    pUbicacion.textContent = detallesUbicacion.join(", ");

    const pDiaSemana = document.createElement("p");
    pDiaSemana.classList.add("dia-semana");
    pDiaSemana.textContent = obtenerDia();

    infoLocalizacion.append(
        pNombreCiudad,
        pUbicacion,
        pDiaSemana
    );

    // --------------------------------
    // TEMPERATURA PRINCIPAL
    // --------------------------------

    const datosClima = document.createElement("div");
    datosClima.classList.add("datos-clima");

    const contenedorTemperatura = document.createElement("div");
    contenedorTemperatura.classList.add("contenedor-temperatura");

    const imagenTiempo = document.createElement("img");
    imagenTiempo.classList.add("icono-tiempo");
    imagenTiempo.src = misDatosTiempo.icono;
    imagenTiempo.alt = misDatosTiempo.descripcionClima;

    const pTemperaturaActual = document.createElement("p");
    pTemperaturaActual.classList.add("temp-actual");
    pTemperaturaActual.textContent =
        `${Math.round(misDatosTiempo.temperaturaActual)}°`;

    const pEstadoTiempo = document.createElement("p");
    pEstadoTiempo.classList.add("estado-tiempo");
    pEstadoTiempo.textContent = misDatosTiempo.descripcionClima;

    contenedorTemperatura.append(
        imagenTiempo,
        pTemperaturaActual,
        pEstadoTiempo
    );

    // --------------------------------
    // DETALLES: MÍNIMA, MÁXIMA Y HORA
    // --------------------------------

    const contenedorDetalles = document.createElement("div");
    contenedorDetalles.classList.add("contenedor-detalles");

    const pMinima = document.createElement("p");
    pMinima.classList.add("temp-minima");
    pMinima.textContent =
        `Mínima: ${Math.round(misDatosTiempo.temperaturaMinima)}°`;

    const pMaxima = document.createElement("p");
    pMaxima.classList.add("temp-maxima");
    pMaxima.textContent =
        `Máxima: ${Math.round(misDatosTiempo.temperaturaMaxima)}°`;

    const pHora = document.createElement("p");
    pHora.classList.add("hora-actual");
    pHora.textContent = `Actualizado: ${obtenerHora()}`;

    contenedorDetalles.append(pMinima, pMaxima, pHora);

    // --------------------------------
    // MONTAJE DE LA TARJETA
    // --------------------------------

    datosClima.append(contenedorTemperatura, contenedorDetalles);

    infoTiempo.append(infoLocalizacion, datosClima);
}


function crearTarjetaPrevision(datosDia) {
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

function limpiarInfoPrevision() {
    const contPrevisiones = document.querySelector(".prevision");
    contPrevisiones.innerHTML = "";
}

function obtenerDia() {
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

function obtenerHora() {
    const d = new Date();
    let hora = añadirCeros(d.getHours());
    let minuto = añadirCeros(d.getMinutes());
    let time = hora + ":" + minuto;
    return time;
}

function limpiarInfoTiempo() {
    const infoTiempo = document.querySelector(".info-tiempo");
    infoTiempo.innerHTML = "";
}

function mostrarLoader() {
    activarOverlay();
    const loader = document.querySelector(".loader");
    loader.style.visibility = "visible";
}

function ocultarLoader() {
    const loader = document.querySelector(".loader");
    loader.style.visibility = "hidden";
}

function activarOverlay() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "block";
}

function desactivarOverlay() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
}

function mostrarVentanaError(mensajeError) {
    activarOverlay();
    const ventanaError = document.querySelector(".ventana-error");
    const mensaje = document.querySelector(".mensaje");
    mensaje.textContent = mensajeError;
    ventanaError.style.visibility = "visible";
}

function cerrarVentanaError() {
    const ventanaError = document.querySelector(".ventana-error");
    ventanaError.style.visibility = "hidden";
    desactivarOverlay();
}

function finalizarCarga() {
    const loader = document.querySelector(".loader");
    loader.style.visibility = "hidden";

    if (document.querySelector(".ventana-error").style.visibility !== "visible") {
        desactivarOverlay();
    }
}


function mostrarResultadosBusqueda(ciudades) {
    contenedorResultados.innerHTML = "";

    ciudades.forEach((ciudad, indice) => {
        const opcion = document.createElement("button");
        opcion.type = "button";
        opcion.classList.add("opcion-ciudad");

        const nombre = document.createElement("span");
        nombre.classList.add("nombre-ciudad");
        nombre.textContent = ciudad.nombre;

        const detalles = document.createElement("span");
        detalles.classList.add("detalles-ciudad");

        const ubicacion = [ciudad.region, ciudad.pais]
            .filter(Boolean)
            .join(", ");

        detalles.textContent = ubicacion;

        opcion.append(nombre, detalles);

        opcion.dataset.indice = indice;

        contenedorResultados.appendChild(opcion);
    });

    contenedorResultados.style.display = "block";
}

function ocultarResultadosBusqueda() {
    contenedorResultados.style.display = "none";
    contenedorResultados.innerHTML = "";
}

export {crearTarjetaTiempo, activarOverlay, desactivarOverlay, limpiarInfoPrevision, limpiarInfoTiempo, mostrarLoader, ocultarLoader, mostrarVentanaError, cerrarVentanaError, crearTarjetaPrevision, finalizarCarga, mostrarResultadosBusqueda, ocultarResultadosBusqueda};
