// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";

// 🔁 Actualizar precio promocional
document.querySelectorAll(".precio-promocional").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

// ✅ Mostrar el precio original tachado solo cuando hay promo
document.querySelectorAll(".precio-original").forEach(el => {
  el.style.textDecoration = hoy > fechaLimitePromo ? "none" : "line-through";
});

// 🔁 Ocultar fecha de validez si la promo venció
document.querySelectorAll(".promo-fecha").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "none" : "inline";
});