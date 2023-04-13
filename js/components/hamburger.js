export default function hamburger(panelBtn, panel, menuLink) {
	let d = document;

	d.addEventListener("click", (e) => {
		if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
			e.preventDefault();
			d.querySelector(`${panelBtn} > span`).classList.toggle("off-burger");
			d.querySelector(panel).classList.toggle("is-active");

			if (d.querySelector(panelBtn).classList.length >= 2) {
				d.querySelector(panelBtn).classList.toggle("bg-primary");
				d.querySelector(`${panelBtn} > span`).classList.toggle("bg-primary-burger");
			}
		}

		if (e.target.matches(menuLink)) {
			d.querySelector(`${panelBtn} > span`).classList.toggle("off-burger");
			d.querySelector(panel).classList.toggle("is-active");
		}
	});
}
