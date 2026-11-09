import {
    obtenerTiempo,
    obtenerLocalizacion,
    obtenerDatosTiempo,
    obtenerTiempoUbicacion,
    crearObjetoTiempo
} from "./api";
import {
    mostrarLoader,
    cerrarVentanaError,
    mostrarVentanaError,
    crearTarjetaTiempo,
    finalizarCarga,
    mostrarResultadosBusqueda,
    ocultarResultadosBusqueda
} from "./elementosDOM";

const inputCiudad = document.querySelector("#input-ciudad");
const imgBuscarCiudad = document.querySelector("#buscar-ciudad");
const contenedorTitulo = document.querySelector(".contenedor-titulo");
const btnCelsius = document.querySelector("#celsius");
const btnFahrenheit = document.querySelector("#fahrenheit");
const btnCerrarVentana = document.querySelector(".cerrar-ventana");
const contenedorResultados = document.querySelector(".resultados-busqueda");
const contenedorBuscador = document.querySelector(".contenedor-buscador");

let unidadesSeleccionadas = "metric";
let ubicacionActual = null;
let ciudadesEncontradas = [];
let idBusqueda = 0;
let busquedaEnCurso = false;

function añadirEventos() {

    actualizarBotonesUnidades(unidadesSeleccionadas);

    // Buscar ciudad
    imgBuscarCiudad.addEventListener("click", buscarCiudad);

    // Buscar mediante tecla Enter
    inputCiudad.addEventListener("input", () => {
        // Invalida cualquier petición anterior.
        idBusqueda++;

        ocultarResultadosBusqueda();
        ciudadesEncontradas = [];

        // Si había una búsqueda pendiente, retiramos el loader.
        if (busquedaEnCurso) {
            busquedaEnCurso = false;
            finalizarCarga();
        }
    });

    // Volver a la página inicial
    contenedorTitulo.addEventListener("click", () => {
        location.reload();
    });

    // Cambiar unidades
    btnCelsius.addEventListener("click", () => cambiarUnidades("metric"));
    btnFahrenheit.addEventListener("click", () => cambiarUnidades("imperial"));

    // Cerrar ventana de error
    btnCerrarVentana.addEventListener("click", cerrarVentanaError);

    contenedorResultados.addEventListener("click", async (e) => {
        const opcion = e.target.closest(".opcion-ciudad");

        if (!opcion) return;

        const indice = Number(opcion.dataset.indice);

        const ciudadSeleccionada = ciudadesEncontradas[indice];

        if (!ciudadSeleccionada) return;

        ocultarResultadosBusqueda();
        mostrarLoader();

        try {
            const tiempo = await obtenerTiempoUbicacion(
                ciudadSeleccionada,
                unidadesSeleccionadas
            );

            ubicacionActual = {
                latitud: tiempo.latitud,
                longitud: tiempo.longitud
            };

            crearTarjetaTiempo(tiempo);

        } catch (error) {
            console.error(error);
            mostrarVentanaError("No se ha podido obtener el tiempo de esta ciudad.");
        } finally {
            finalizarCarga();
        }
    });

    // ocultar los resultados de busqueda cuando se hace clic fuera del contenedor de busqueda
    document.addEventListener("click", (e) => {
        if (!contenedorBuscador.contains(e.target)) {
            ocultarResultadosBusqueda();
        }
    });

    // los resultados anteriores de busqueda desaparecen en cuanto el usuario modifica el texto

    inputCiudad.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            buscarCiudad();
        }

        if (e.key === "ArrowDown") {
            const primeraOpcion = contenedorResultados.querySelector(
                ".opcion-ciudad"
            );

            if (primeraOpcion) {
                e.preventDefault();
                primeraOpcion.focus();
            }
        }

        if (e.key === "Escape") {
            ocultarResultadosBusqueda();
        }
    });

    contenedorResultados.addEventListener("keydown", (e) => {

        const opciones = [
            ...contenedorResultados.querySelectorAll(".opcion-ciudad")
        ];

        if (opciones.length === 0) return;

        const indiceActual = opciones.indexOf(document.activeElement);

        if (e.key === "ArrowDown") {
            e.preventDefault();

            const siguienteIndice = (indiceActual + 1) % opciones.length;
            opciones[siguienteIndice].focus();
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();

            const anteriorIndice =
                (indiceActual - 1 + opciones.length) % opciones.length;

            opciones[anteriorIndice].focus();
        }

        if (e.key === "Escape") {
            ocultarResultadosBusqueda();
            inputCiudad.focus();
        }
    });

    cargarTiempoLocal();
}

function comprobarCiudadIntroducida() {
    const ciudad = inputCiudad.value.trim();

    if (ciudad === "") {
        return { ciudad: null, valido: false };
    }

    return { ciudad, valido: true };
}

async function cargarTiempoLocal() {
    mostrarLoader();

    try {
        const tiempo = await obtenerLocalizacion(unidadesSeleccionadas);

        ubicacionActual = {
            latitud: tiempo.latitud,
            longitud: tiempo.longitud
        };

        crearTarjetaTiempo(tiempo);

    } catch (error) {
        console.error(error);

        if (error.code === 1) {
            console.info("El usuario ha denegado el acceso a su ubicación.");
            return;
        }

        mostrarVentanaError("No se ha podido obtener tu ubicación.");

    } finally {
        finalizarCarga();
    }
}

async function cambiarUnidades(unidades) {
    if (unidades === unidadesSeleccionadas) {
        return;
    }

    if (!ubicacionActual) {
        unidadesSeleccionadas = unidades;
        actualizarBotonesUnidades(unidades);
        return;
    }

    mostrarLoader();

    try {
        const datosTiempo = await obtenerDatosTiempo(
            ubicacionActual.latitud,
            ubicacionActual.longitud,
            unidades
        );

        const tiempo = crearObjetoTiempo(
            datosTiempo,
            ubicacionActual.latitud,
            ubicacionActual.longitud
        );

        unidadesSeleccionadas = unidades;
        actualizarBotonesUnidades(unidades);
        crearTarjetaTiempo(tiempo);

    } catch (error) {
        console.error(error);
        mostrarVentanaError("Error al actualizar las unidades de temperatura.");

    } finally {
        finalizarCarga();
    }
}

function actualizarBotonesUnidades(unidades) {
    btnCelsius.classList.toggle("grados-activo", unidades === "metric");
    btnCelsius.classList.toggle("grados-inactivo", unidades !== "metric");

    btnFahrenheit.classList.toggle("grados-activo", unidades === "imperial");
    btnFahrenheit.classList.toggle("grados-inactivo", unidades !== "imperial");
}

async function buscarCiudad() {
    const ciudadComprobada = comprobarCiudadIntroducida();

    if (!ciudadComprobada.valido) return;

    // Cada búsqueda recibe un identificador diferente.
    const idActual = ++idBusqueda;

    ocultarResultadosBusqueda();
    mostrarLoader();
    busquedaEnCurso = true;

    try {
        const ciudades = await obtenerTiempo(ciudadComprobada.ciudad);

        // Si existe una búsqueda más reciente, ignoramos esta respuesta.
        if (idActual !== idBusqueda) return;

        if (ciudades === null) {
            ciudadesEncontradas = [];
            mostrarVentanaError("No se ha encontrado la ciudad introducida");
            return;
        }

        ciudadesEncontradas = ciudades;
        mostrarResultadosBusqueda(ciudadesEncontradas);

    } catch (error) {
        if (idActual !== idBusqueda) return;

        mostrarVentanaError(
            "Error al obtener las ciudades, por favor inténtelo otra vez."
        );
        console.error(error);

    } finally {
        // Solo la búsqueda vigente puede finalizar la carga.
        if (idActual === idBusqueda) {
            busquedaEnCurso = false;
            finalizarCarga();
        }
    }
}

export { añadirEventos, unidadesSeleccionadas as gradosSeleccionados };
