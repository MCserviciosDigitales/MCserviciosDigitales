// 📅 Definimos la fecha límite de la promoción
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios y texto de la promoción
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "🔥 Promo relanzamiento hasta el 25/08/2025";

// 🔁 Recorremos cada tarjeta de servicio
document.querySelectorAll(".card").forEach(card => {
  // 🎯 Botones y contenedor de detalle
  const btnVerDetalle = card.querySelector(".ver-detalle"); // Botón para abrir detalle
  const btnVolver = card.querySelector(".volver"); // Botón para cerrar detalle
  const detalle = card.querySelector(".detalle-servicio"); // Contenedor del detalle

  // 🟢 Evento: mostrar detalle y aplicar precios dinámicos
  btnVerDetalle.addEventListener("click", () => {
    // 👁️ Mostramos el bloque de detalle
    detalle.style.display = "block";

    // 🎯 Elementos que vamos a modificar dentro del detalle
    const precioOriginal = detalle.querySelector(".precio-original"); // Precio tachado
    const preciosPromo = detalle.querySelectorAll(".precio-promocional"); // Todos los precios con descuento
    const promoFecha = detalle.querySelector(".promo-fecha"); // Label de validez

    // ⏳ Si la promo ya venció
    if (hoy > fechaLimitePromo) {
      // 🔒 Ocultamos el precio original tachado
      if (precioOriginal) precioOriginal.style.display = "none";

      // 🔄 Actualizamos todos los precios promocionales al precio normal
      preciosPromo.forEach(span => {
        span.textContent = precioNormal;
        span.style.textDecoration = "none";
        span.style.color = "#000";
      });

      // 🚫 Ocultamos el mensaje de validez
      if (promoFecha) promoFecha.style.display = "none";
    } else {
      // ✅ Si la promo está activa

      // ✏️ Mostramos el precio original tachado
      if (precioOriginal) {
        precioOriginal.textContent = precioNormal;
        precioOriginal.style.display = "inline";
        precioOriginal.style.textDecoration = "line-through";
        precioOriginal.style.color = "#bbb";
      }

      // 🔄 Actualizamos todos los precios promocionales al valor con descuento
      preciosPromo.forEach(span => {
        span.textContent = precioConDescuento;
        span.style.display = "inline";
        span.style.color = "#e91e63";
      });

      // 📢 Mostramos el mensaje de validez
      if (promoFecha) {
        promoFecha.textContent = textoPromo;
        promoFecha.style.display = "block";
        promoFecha.style.color = "#ff9800";
      }
    }
  });

  // 🔴 Evento: ocultar el detalle al hacer clic en "Volver"
  btnVolver.addEventListener("click", () => {
    detalle.style.display = "none";
  });
});