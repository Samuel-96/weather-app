import {obtenerTiempo } from "./api";

const inputCiudad = document.querySelector("#input-ciudad");
const imgBuscarCiudad = document.querySelector("#buscar-ciudad");
const contenedorTitulo = document.querySelector(".contenedor-titulo");
const btnCelsius = document.querySelector("#celsius");
const btnFahrenheit = document.querySelector("#fahrenheit");

let unidadesSeleccionadas = "metric"; //por defecto en Celsius
let clicable = true;

function añadirEventos(){

    //buscar mediante click en la lupa
    imgBuscarCiudad.addEventListener("click", () => {
        const ciudadComprobada = comprobarCiudadIntroducida();

        if(ciudadComprobada.valido){
            obtenerTiempo(ciudadComprobada.ciudad);
        }
    });

    //buscar mediante tecla enter
    inputCiudad.addEventListener("keypress", function(e){
        if(e.code === "Enter"){
            imgBuscarCiudad.click();
        }
     });

     contenedorTitulo.addEventListener("click", () => {
        location.reload();
     });

     btnCelsius.addEventListener("click", () => {
            if (!btnCelsius.classList.contains("grados-activo")) {
                if(clicable){
                    btnCelsius.classList.remove("grados");
                    btnCelsius.classList.add("grados-activo");
                    unidadesSeleccionadas = "metric";
                    clicable = false;
                }
              } else{
                if(!clicable){
                    btnCelsius.classList.remove("grados-activo");
                btnCelsius.classList.add("grados-inactivo");
                unidadesSeleccionadas = "";
                clicable = true;
                }
              }
     });

     btnFahrenheit.addEventListener("click", () => {
        if (!btnFahrenheit.classList.contains("grados-activo")) {
            if(clicable){
                btnFahrenheit.classList.remove("grados");
                btnFahrenheit.classList.add("grados-activo");
                unidadesSeleccionadas = "imperial";
                clicable = false;
            }
          } else{
            if(!clicable){
                btnFahrenheit.classList.remove("grados-activo");
                btnFahrenheit.classList.add("grados-inactivo");
            unidadesSeleccionadas = "";
            clicable = true;
            }
          }
     });
}

function comprobarCiudadIntroducida(){
    const ciudad = inputCiudad.value.trim();
    if(ciudad === ""){
        console.log("vacio");
        return {ciudad: null, valido: false};
    } else{
        console.log("ciudad introducida: " + ciudad);
        return {ciudad: ciudad, valido: true};
    }
}

export {añadirEventos, unidadesSeleccionadas as gradosSeleccionados};