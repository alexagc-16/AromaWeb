js/nav.js

javascript
const navbar = document.getElementById("navbar");

let rutaNav;

if (window.location.pathname.includes("/components/")) {
    rutaNav = "nav.html";
} else {
    rutaNav = "components/nav.html";
}

fetch(rutaNav)
    .then(response => {
        if (!response.ok) {
            throw new Error("No se encontró nav.html");
        }
        return response.text();
    })
    .then(data => {
        navbar.innerHTML = data;
        const enlaces = navbar.querySelectorAll("a");

        if (!window.location.pathname.includes("/components/")) {
            enlaces[0].href = "index.html";
            enlaces[1].href = "components/nosotros.html";
            enlaces[2].href = "components/productos.html";
            enlaces[3].href = "components/contactos.html";
        }
    })
    .catch(error => console.error(error));