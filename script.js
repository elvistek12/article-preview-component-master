contenedorVisible = document.querySelector(".contenedor-informacion");
botonCompartirVisible = document.querySelector(".contenedor-compartir");

contenedorNoVisible = document.querySelector(".contenedor-redes-sociales");
botonCompartirNoVisible = document.querySelector(".contenedor-compartir-redes-sociales");

botonCompartirVisible.addEventListener("click", () => {
  contenedorVisible.classList.toggle("inactivo");
  contenedorNoVisible.classList.toggle("activo");
  botonCompartirVisible.classList.toggle("pintado");

  if (contenedorNoVisible.classList.contains("activo")) {
    document.querySelector(".contenedor-compartir img").src = "images/icon-share-white.svg";
  } else {
    document.querySelector(".contenedor-compartir img").src = "images/icon-share.svg";
  }
});

botonCompartirNoVisible.addEventListener("click", () => {
  contenedorVisible.classList.toggle("inactivo");
  contenedorNoVisible.classList.toggle("activo");
  botonCompartirVisible.classList.toggle("pintado");

  if (contenedorNoVisible.classList.contains("activo")) {
    document.querySelector(".contenedor-compartir img").src = "images/icon-share-white.svg";
  } else {
    document.querySelector(".contenedor-compartir img").src = "images/icon-share.svg";
  }
});