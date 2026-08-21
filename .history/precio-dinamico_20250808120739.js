// 🕒 FECHA LÍMITE DE LA PROMO
const fechaLimitePromo = new Date("2025-08-7");
const hoy = new Date();

// 💰 Precios
const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "Promo valida hasta el 25/08";

// 🔁 Actualizar todos los elementos en la página
document.querySelectorAll(".precio-promocional").forEach(el => {
  el.textContent = hoy > fechaLimitePromo ? precioNormal : precioConDescuento;
});

document.querySelectorAll(".promo-fecha").forEach(el => {
  if (hoy > fechaLimitePromo) {
    el.style.display = "none";
  } else {
    el.textContent = textoPromo;
    el.style.display = "inline";
  }
});

// ✅ Mostrar el precio original tachado solo cuando hay promo
document.querySelectorAll(".precio-original").forEach(el => {
  el.textContent = precioNormal;
  el.style.display = "inline";

  if (hoy > fechaLimitePromo) {
    el.style.textDecoration = "none"; // sin tachado
  } else {
    el.style.textDecoration = "line-through"; // tachado
  }
});