const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  console.log('Hamburger menu clicked'); // Verificar que el evento funciona
  hamburger.classList.toggle("active"); // Cambiar el estado del botón hamburguesa
  navLinks.classList.toggle("show");    // Mostrar/ocultar el menú
});
