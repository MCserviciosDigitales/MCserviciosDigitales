// 🕒 FECHA LÍMITE DE LA PROMO - LANDING
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios - LANDING
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "Valida hasta el 25/08";

// 🔁 Actualizar precios promocionales - LANDING
document.querySelectorAll(".precio-promocional").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

// 🔁 Actualizar precio en cara inicial - LANDING
document.querySelectorAll(".precio-inicial").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

// ✅ Mostrar el precio original tachado solo cuando hay promo - LANDING
document.querySelectorAll(".precio-original").forEach(el => {
  el.textContent = precioNormal;
  el.style.display = "inline";
  el.style.textDecoration = hoy > fechaLimitePromo ? "none" : "line-through";
});

// 🗓️ Fecha de validez - LANDING
document.querySelectorAll(".promo-fecha").forEach(el => {
  if (hoy > fechaLimitePromo) {
    el.style.display = "none";
  } else {
    el.textContent = textoPromo;
    el.style.display = "inline";
  }
});

// ❌ Ocultar línea de promo si venció - LANDING
document.querySelectorAll(".promo-linea").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "none" : "block";
});

// ✅ Mostrar línea de precio final si venció - LANDING
document.querySelectorAll(".precio-final").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "block" : "none";
});

// 🔁 Actualizar contenido del precio final - LANDING
document.querySelectorAll(".precio-final-destacado").forEach(el => {
  el.textContent = precioNormal;
});


// 🕒 FECHA LÍMITE DE LA PROMO - FLYER
const fechaLimiteFlyer = new Date("2025-08-25");

// 💰 Precios - FLYER
const precioNormalFlyer = "$7.000";
const precioConDescuentoFlyer = "$5.000";
const textoPromoFlyer = "Valida hasta el 25/08";

// 🔁 Actualizar precios promocionales - FLYER
document.querySelectorAll(".precio-promocional-flyer").forEach(el => {
  el.textContent = hoy > fechaLimiteFlyer ? precioNormalFlyer : precioConDescuentoFlyer;
});

// 🔁 Actualizar precio en cara inicial - FLYER
document.querySelectorAll(".precio-inicial-flyer").forEach(el => {
  el.textContent = hoy > fechaLimiteFlyer ? precioNormalFlyer : precioConDescuentoFlyer;
});

// ✅ Mostrar el precio original tachado solo cuando hay promo - FLYER
document.querySelectorAll(".precio-original-flyer").forEach(el => {
  el.textContent = precioNormalFlyer;
  el.style.display = "inline";
  el.style.textDecoration = hoy > fechaLimiteFlyer ? "none" : "line-through";
});

// 🗓️ Fecha de validez - FLYER
document.querySelectorAll(".promo-fecha-flyer").forEach(el => {
  if (hoy > fechaLimiteFlyer) {
    el.style.display = "none";
  } else {
    el.textContent = textoPromoFlyer;
    el.style.display = "inline";
  }
});

// ❌ Ocultar línea de promo si venció - FLYER
document.querySelectorAll(".promo-linea-flyer").forEach(el => {
  el.style.display = hoy > fechaLimiteFlyer ? "none" : "block";
});

// ✅ Mostrar línea de precio final si venció - FLYER
document.querySelectorAll(".precio-final-flyer").forEach(el => {
  el.style.display = hoy > fechaLimiteFlyer ? "block" : "none";
});

// 🔁 Actualizar contenido del precio final - FLYER
document.querySelectorAll(".precio-final-destacado-flyer").forEach(el => {
  el.textContent = precioNormalFlyer;
});