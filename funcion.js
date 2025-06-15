// Función para filtrar recetas según la categoría elegida
function filtrarCategorias(categoria) {
  
  // Selecciona todas las tarjetas de recetas que tienen la clase .card
  const recetas = document.querySelectorAll(".card");
  
  // Recorre cada receta una por una
  recetas.forEach(receta => {
    
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



















