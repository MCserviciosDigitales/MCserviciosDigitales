// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-25");

// 💰 ELEMENTOS DONDE SE MUESTRA EL PRECIO
const precioPromo = document.querySelector(".precio-promocional");
const promoFecha = document.querySelector(".promo-fecha");

// 🧠 CAMBIOS AUTOMÁTICOS SEGÚN LA FECHA ACTUAL
const hoy = new Date();

if (precioPromo) {
  if (hoy > fechaLimitePromo) {
    // ✅ Si la promo ya venció, actualizamos el precio y ocultamos el mensaje
    precioPromo.textContent = "$20.000";
    if (promoFecha) {
      promoFecha.style.display = "none";
    }
  } else {
    // ✅ Si la promo sigue activa, mostramos el precio de lanzamiento
    precioPromo.textContent = "$15.000";
    if (promoFecha) {
      promoFecha.textContent = "🔥 Promo relanzamiento hasta el 25/08";
    }
  }
}

// ✍️ Recordatorio: si cambiás la fecha de la promo, actualizá la línea de arriba