import GitLogo from "../assets/github-logo.png";
import WebLogo from "../assets/logo.png";
import Buscar from "../assets/search.png";

function cargarImagenes(){
    const gitLogo = document.querySelector(".git-logo");
    gitLogo.src = GitLogo;

    const webLogo = document.querySelector("#logo-web");
    webLogo.src = WebLogo;

    const buscarCiudad = document.querySelector("#buscar-ciudad");
    buscarCiudad.src = Buscar;
}

export {cargarImagenes};
