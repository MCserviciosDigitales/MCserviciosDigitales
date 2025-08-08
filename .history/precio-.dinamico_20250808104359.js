// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "🔥 Promo relanzamiento hasta el 25/08/2025";

// 🔁 Actualizar solo el bloque de detalle
document.querySelectorAll(".card").forEach(card => {
  const detalle = card.querySelector(".detalle-servicio");
  if (!detalle) return;

  const precioOriginal = detalle.querySelector(".precio-original");
  const precioPromo = detalle.querySelector(".precio-promocional");
  const promoFecha = detalle.querySelector(".promo-fecha");

  if (hoy > fechaLimitePromo) {
    // Promo vencida
    if (precioOriginal) precioOriginal.style.display = "none";
    if (precioPromo) precioPromo.textContent = precioNormal;
    if (promoFecha) promoFecha.style.display = "none";
  } else {
    // Promo activa
    if (precioOriginal) {
      precioOriginal.textContent = precioNormal;
      precioOriginal.style.display = "inline";
    }
    if (precioPromo) precioPromo.textContent = precioConDescuento;
    if (promoFecha) {
      promoFecha.textContent = textoPromo;
      promoFecha.style.display = "inline";
    }
  }
});