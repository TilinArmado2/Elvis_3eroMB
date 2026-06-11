const btnMenu = document.getElementById("btnMenu");
const menuNavegacion = document.getElementById("menuNavegacion");

btnMenu.addEventListener("click", function() {
    menuNavegacion.classList.toggle("activo");
});