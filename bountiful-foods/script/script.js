//Hamburger button//


function toggleMenu() {
	document.getElementById("navigation").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//Actual Date//

const date1 = document.querySelector("#actualdate");
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Last Update: <span>${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}
let actualyear = document.querySelector("#actualyear");
actualyear.innerHTML = `&copy 2022 | Eugenia Espejo | Mendoza Argentina`;
