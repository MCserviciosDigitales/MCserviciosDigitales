// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

// 💰 Precios
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = `⏳ Promo relanzamiento: ${precioNormal}`;
const textoValidez = "Válida hasta el 25/08/2025";

// 🔁 Actualizar precios
document.querySelectorAll(".precio-promocional").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

document.querySelectorAll(".precio-original").forEach(el => {
  el.textContent = precioNormal;
  el.style.display = "inline";
  el.style.textDecoration = hoy > fechaLimitePromo ? "none" : "line-through";
});

// 🔁 Mostrar u ocultar texto de promo
document.querySelectorAll(".promo-texto").forEach(el => {
  if (hoy > fechaLimitePromo) {
    el.style.display = "none";
  } else {
    el.textContent = textoPromo;
    el.style.display = "inline";
  }
});

// 🔁 Mostrar u ocultar fecha de validez
document.querySelectorAll(".promo-validez").forEach(el => {
  el.style.display = hoy > fechaLimitePromo ? "none" : "inline";
});