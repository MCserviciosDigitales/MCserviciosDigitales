const fechaLimitePromo = new Date("2025-08-25");
const hoy = new Date();

const precioNormal = "$20.000";
const precioConDescuento = "$15.000";
const textoPromo = "🔥 Promo relanzamiento hasta el 25/08/2025";

document.querySelectorAll(".card").forEach(card => {
  const detalle = card.querySelector(".detalle-servicio");
  const btnVer = card.querySelector(".ver-detalle");
  const btnVolver = card.querySelector(".volver");

  const precioOriginal = detalle.querySelector(".precio-original");
  const precioPromo = detalle.querySelector(".precio-promocional");
  const promoFecha = detalle.querySelector(".promo-fecha");

  btnVer.addEventListener("click", () => {
    detalle.style.display = "block";

    if (hoy > fechaLimitePromo) {
      precioOriginal.style.display = "none";
      precioPromo.textContent = precioNormal;
      promoFecha.style.display = "none";
    } else {
      precioOriginal.textContent = precioNormal;
      precioOriginal.style.display = "inline";
      precioOriginal.style.textDecoration = "line-through";
      precioOriginal.style.color = "#bbb";

      precioPromo.textContent = precioConDescuento;
      precioPromo.style.display = "inline";
      precioPromo.style.color = "#e91e63";

      promoFecha.textContent = textoPromo;
      promoFecha.style.display = "block";
      promoFecha.style.color = "#ff9800";
    }
  });

  btnVolver.addEventListener("click", () => {
    detalle.style.display = "none";
  });
});