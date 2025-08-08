// 📅 Fecha límite de la promoción
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios y texto de la promo
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "🔥 Promo relanzamiento hasta el 25/08/2025";

// 🔁 Recorremos cada tarjeta
document.querySelectorAll(".card").forEach(card => {
  const detalle = card.querySelector(".detalle-servicio");
  if (!detalle) return;

  // 🎯 Elementos dentro del detalle
  const precioOriginal = detalle.querySelector(".precio-original"); // Precio tachado
  const preciosPromo = detalle.querySelectorAll(".precio-promocional"); // Todos los precios con descuento
  const promoFecha = detalle.querySelector(".promo-fecha"); // Label de validez

  // ⏳ Promo vencida
  if (hoy > fechaLimitePromo) {
    if (precioOriginal) precioOriginal.style.display = "none";

    preciosPromo.forEach(span => {
      span.textContent = precioNormal;
      span.style.textDecoration = "none";
      span.style.color = "#000";
    });

    if (promoFecha) promoFecha.style.display = "none";
  }

  // ✅ Promo activa
  else {
    if (precioOriginal) {
      precioOriginal.textContent = precioNormal;
      precioOriginal.style.display = "inline";
      precioOriginal.style.textDecoration = "line-through";
      precioOriginal.style.color = "#bbb";
    }

    preciosPromo.forEach(span => {
      span.textContent = precioConDescuento;
      span.style.display = "inline";
      span.style.color = "#e91e63";
    });

    if (promoFecha) {
      promoFecha.textContent = textoPromo;
      promoFecha.style.display = "block";
      promoFecha.style.color = "#ff9800";
    }
  }
});