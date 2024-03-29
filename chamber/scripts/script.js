//Current day //

const options = {weekday: "long" , day: "numeric" , month: "long" , year: "numeric"};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-Uk" , options);


const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

document.querySelector("#currentDate").innerHTML = fullDate;




//Actual date//
const date1 = document.querySelector("#actualdate");
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Last Update: <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}
let actualyear = document.querySelector("#actualyear");
actualyear.innerHTML = `&copy 2022 | Eugenia Espejo | Mendoza Argentina`;

//Hamburger button//


function toggleMenu() {
	document.getElementById("navigation").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;





