const vencimiento = new Date("2025-08-25");
const hoy = new Date();

if (hoy > vencimiento) {
  document.querySelectorAll(".promo-fecha, .promo-validez").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll(".precio-original").forEach(el => {
    el.style.textDecoration = "none";
  });
  document.querySelectorAll(".precio-promocional").forEach(el => {
    el.textContent = "$20.000";
  });
} else {
  document.querySelectorAll(".precio-original").forEach(el => {
    el.style.textDecoration = "line-through";
  });
}