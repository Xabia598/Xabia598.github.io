
// Función escrita por chatgpt
function includeHTML(element_name) {
  /* Bucle a través de todos los elementos NAV con el atributo w3-include-html */
  const z = document.getElementsByTagName(element_name);
  for (let i = 0; i < z.length; i++) {
    const elmnt = z[i];
    /* Obtén el archivo específico para ese elemento NAV */
    const file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Realiza una solicitud HTTP al archivo */
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Error al cargar el archivo.";
          }
          /* Elimina el atributo y llama a esta función nuevamente */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sal del bucle y la función */
      return;
    }
  }
}

// También robado de chatgpt
// Espera a que se cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("nav");
});

