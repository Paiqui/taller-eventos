document.addEventListener("DOMContentLoaded", () => {
    const divino = document.getElementById("divino");
    const saludito = document.getElementById("saludito");

    saludito.addEventListener("click", (evento) => {
        evento.stopPropagation();
    });

    divino.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });
});