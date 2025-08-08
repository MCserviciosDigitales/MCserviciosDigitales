// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "🔥 Promo relanzamiento hasta el 25/08";

// 🔁 Actualizar precios promocionales
document.querySelectorAll(".precio-promocional").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

// 🔁 Actualizar precio en cara inicial
document.querySelectorAll(".precio-inicial").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

// ✅ Mostrar el precio original tachado solo cuando hay promo
document.querySelectorAll(".precio-original").forEach(el => {
  el.textContent = precioNormal;
  el.style.display = "inline";
  el.style.textDecoration = hoy > fechaLimitePromo ? "none" : "line-through";
});

// 🗓️ Fecha de validez
document.querySelectorAll(".promo-fecha").forEach(el => {
  if (hoy > fechaLimitePromo) {
    el.style.display = "none";
  } else {
    el.textContent = textoPromo;
    el.style.display = "inline";
  }
});

// ❌ Ocultar línea de promo si venció
document.querySelectorAll(".promo-linea").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "none" : "block";
});

// ✅ Mostrar línea de precio final si venció
document.querySelectorAll(".precio-final").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "block" : "none";
});

// 🔁 Actualizar contenido del precio final
document.querySelectorAll(".precio-normal").forEach(el => {
  el.textContent = precioNormal;
});