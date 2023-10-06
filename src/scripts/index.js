import "../styles/style.css";
import "../styles/mobileStyle.css"
import {cargarImagenes} from "./cargarImagenes.js";
import { añadirEventos } from "./eventos";
import { obtenerLocalizacion } from "./api";

obtenerLocalizacion();
cargarImagenes();
añadirEventos();
