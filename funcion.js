// Función para filtrar recetas según la categoría elegida
function filtrarCategorias(categoria) {
  // Selecciona todas las tarjetas de recetas que tienen la clase .card
  const recetas = document.querySelectorAll(".card");

  // Recorre cada receta una por una
  recetas.forEach((receta) => {
    // Si la categoría seleccionada es "todos" o coincide con el data-categoria de la receta
    if (categoria === "todos" || receta.dataset.categoria === categoria) {
      // Muestra esa receta (la hace visible)
      receta.style.display = "block";
    } else {
      // Si no coincide, oculta la receta (la hace invisible)
      receta.style.display = "none";
    }
  });
}

// FUNCION PARA BUSCAR LA COMIDA 

function filtrarBusqueda(termino) {
  const recetas = document.querySelectorAll(".card");

  recetas.forEach((receta) => {
    const categoria = receta.dataset.categoria;
    const nombre = receta.textContent.toLowerCase();

    if (
      nombre.includes(termino.toLowerCase()) ||
      categoria === termino.toLowerCase()
    ) {
      receta.style.display = "block";
    } else {
      receta.style.display = "none";
    }
  });
}

// Espera a que el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Obtiene el input con id "buscador"
  const inputBusqueda = document.getElementById("buscador");

  // Escucha el evento cuando se escribe en el input
  inputBusqueda.addEventListener("input", function () {

    // Llama a la función filtrarBusqueda con el texto que se escribió
    filtrarBusqueda(inputBusqueda.value);

  });

});
