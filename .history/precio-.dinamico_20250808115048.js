document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todas las cards
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const fechaPromoEl = card.querySelector(".promo-fecha");
    if (!fechaPromoEl) return; // Si no hay fecha, nada que hacer

    // Extraer fecha desde el texto, ejemplo: "Válida hasta el 25/08/2025"
    const fechaTexto = fechaPromoEl.textContent.trim().replace("Válida hasta el", "").trim();
    const [dia, mes, anio] = fechaTexto.split("/").map(num => parseInt(num, 10));
    const fechaPromo = new Date(anio, mes - 1, dia); // mes empieza en 0

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Para comparar solo fechas

    // Si ya venció la promo
    if (fechaPromo < hoy) {
      const precioOriginalEl = card.querySelector(".precio-original");
      const precioPromoEls = card.querySelectorAll(".precio-promocional");

      // Mostrar solo el precio original como valor final
      if (precioOriginalEl) {
        const precioReal = precioOriginalEl.textContent;
        
        // Reemplazar el precio principal (en la vista de resumen) por el original
        const precioPrincipal = card.querySelector(".contenido-principal .precio-promocional");
        if (precioPrincipal) {
          precioPrincipal.textContent = precioReal;
        }
      }

      // Ocultar elementos de promo
      if (precioOriginalEl) precioOriginalEl.style.display = "none";
      if (fechaPromoEl) fechaPromoEl.style.display = "none";

      // Quitar precio promocional de detalles
      precioPromoEls.forEach(el => el.style.display = "none");
    }
  });
});
