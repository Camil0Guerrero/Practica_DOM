const d = document,
	ls = localStorage;

export default function darkTheme(btn, classDark) {
	const $themeBtn = d.querySelector(btn),
		$selectors = d.querySelectorAll("[data-dark]");

	let moon = `<img src="assets/moon.svg" alt="Moon" />`,
		sun = `<img src="assets/sun.svg" alt="Sun" />`;

	const lightMode = () => {
		$selectors.forEach((el) => el.classList.add(classDark));

		$themeBtn.innerHTML = moon;
		ls.setItem("theme", "light");
		$themeBtn.classList.add("moon");
	};

	const darkMode = () => {
		$selectors.forEach((el) => el.classList.remove(classDark));

		$themeBtn.innerHTML = sun;
		ls.setItem("theme", "dark");
		$themeBtn.classList.remove("moon");
	};

	d.addEventListener("click", (e) => {
		if (e.target.matches(btn) || e.target.matches(`${btn} > *`)) {
			let $sun = d.querySelector(`img[alt="Sun"]`);
			if ($sun) {
				lightMode();
			} else {
				darkMode();
			}
		}
	});

	d.addEventListener("DOMContentLoaded", (e) => {
		let theme = ls.getItem("theme");
		if (theme === "light") lightMode();
		if (ls.getItem(theme === null)) ls.setItem("theme", "dark");
		if (ls.getItem(theme === "dark")) darkMode();
	});
}
