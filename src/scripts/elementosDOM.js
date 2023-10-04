function crearTarjetaTiempo(misDatosTiempo){
    console.log(misDatosTiempo);
    const iconoTiempo = document.querySelector(".icono-tiempo");
    iconoTiempo.src = misDatosTiempo[2];
}

export {crearTarjetaTiempo};