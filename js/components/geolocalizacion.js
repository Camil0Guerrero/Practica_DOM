const d = document,
	n = navigator;

export default function getGeolocation(id) {
	const $id = d.getElementById(id);

	const options = {
		enableHightAcurracy: true,
		timeout: 5000,
		maximumAge: 0,
	};

	const success = (position) => {
		let coords = position.coords;

		$id.innerHTML = `
      <p> Tu posicion actual es: </p>
      <ul>
        <li>Latitud: <b> ${coords.latitude} </b></li>
        <li>Longitud: <b>${coords.longitude} </b></li>
        <li>Precision: <b>${coords.accuracy}</b> Metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
	};

	const error = (err) => {
		$id.innerHTML = `<p> <mark>Error ${err.code}: ${err.message}</mark></p>`;
	};

	n.geolocation.getCurrentPosition(success, error, options);
}
