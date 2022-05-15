function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById("hambutton")
x.onclick = toggleMenu;


const options = {weekday: "long" , day: "numeric" , month: "long" , year: "numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US" , options);