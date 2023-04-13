import countdown from "./components/cuenta_regresiva.js";
import userDeviceInfo from "./components/deteccion_dispositivos.js";
import networkStatus from "./components/deteccion_red.js";
import hamburger from "./components/hamburger.js";
import responsiveMedia from "./components/objeto_responsive.js";
import responsiveTester from "./components/prueba_responsive.js";
import { digitalClock, alarm } from "./components/reloj.js";
import { moveBall, shortcuts } from "./components/teclado.js";
import webcam from "./components/deteccion_webcam.js";
import getGeolocation from "./components/geolocalizacion.js";
import searchFilters from "./components/filtro_busquedas.js";
import draw from "./components/sorteo.js";
import slider from "./components/carrusel.js";
import smartVideo from "./components/video_inteligente.js";
import contactFormValidations from "./components/validaciones_formulario.js";
import speechReader from "./components/narrador.js";
import scrollTopButton from "./components/boton_scroll.js";
import darkTheme from "./components/tema_oscuro.js";
import scrollSpy from "./components/scroll_espia.js";
let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	hamburger(".panel-btn", ".panel", ".menu a");

	digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
	alarm("assets/Sonido.mp3", "#activar-alarma", "#desactivar-alarma");

	countdown("countdown", "2023-04-14", "Feliz cumple Camilo 😊");

	// Responsible responsive design
	responsiveMedia(
		"youtube",
		"(min-width: 1024px)",
		`<a href="https://www.youtube.com/watch?v=oV3nkN5Nufo" target="_target" rel="noopener"> Ver Video </a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/oV3nkN5Nufo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	);

	responsiveMedia(
		"gmaps",
		"(min-width: 1024px)",
		`<a href="https://goo.gl/maps/ZKqZZBsPC9Nr9v6g8" target="_target" rel="noopener"> Ver Mapa </a>`,
		`<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127263.67456329631!2d-74.21318768359374!3d4.595843999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a893c89aaf%3A0xca49263cd941b703!2sMuseo%20de%20Bogot%C3%A1%20-%20Casa%20S%C3%A1mano!5e0!3m2!1ses!2sco!4v1668725621858!5m2!1ses!2sco"
      width="400"
      height="300"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>`
	);

	responsiveTester("responsive-tester");
	userDeviceInfo("user-device");

	webcam("webcam");

	getGeolocation("geolocation");

	searchFilters(".card-filter", ".card");

	draw("#winner-btn", ".player");

	slider();

	smartVideo();

	contactFormValidations();

	scrollTopButton(".scroll-top-btn");

	scrollSpy();
});

d.addEventListener("keydown", (e) => {
	moveBall(e, ".ball", ".stage");
	shortcuts(e);
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
