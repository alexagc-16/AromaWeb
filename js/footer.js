const footer = document.getElementById("footer");

let rutaFooter;

if (window.location.pathname.includes("/components/")) {
    rutaFooter = "footer.html";
} else {
    rutaFooter = "components/footer.html";
}

fetch(rutaFooter)
    .then(response => {
        if (!response.ok) {
            throw new Error("No se encontró footer.html");
        }
        return response.text();
    })
    .then(data => {
        footer.innerHTML = data;

        const enlaces = footer.querySelectorAll("a");

        if (window.location.pathname.includes("/components/")) {
            enlaces[0].href = "../index.html";
            enlaces[1].href = "productos.html";
            enlaces[2].href = "nosotros.html";
            enlaces[3].href = "contactos.html";
        } else {
            enlaces[0].href = "index.html";
            enlaces[1].href = "components/productos.html";
            enlaces[2].href = "components/nosotros.html";
            enlaces[3].href = "components/contactos.html";
        }
    })
    .catch(error => console.error(error));