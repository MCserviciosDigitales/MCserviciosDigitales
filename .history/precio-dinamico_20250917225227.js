// 🕒 FECHAS LÍMITE
const hoy = new Date();
const fechaLimitePromo = new Date("2025-08-25");
const fechaLimiteFlyer = new Date("2025-08-25");
const fechaLimiteActualizacion = new Date("2025-08-25");
const fechaLimiteLogo = new Date("2025-08-25");

// 💰 PRECIOS POR SERVICIO
const precios = {
  landing: {
    normal: "$150.000 ARS",
    promo: "$15.000",
    textoPromo: "Válida hasta el 25/08",
    fechaLimite: fechaLimitePromo
  },
  flyer: {
    normal: "$15.000 ARS",
    promo: "$5.000",
    textoPromo: "Válida hasta el 25/08",
    fechaLimite: fechaLimiteFlyer
  },
  actualizacion: {
    normal: "$25.000 ARS",
    promo: "$5.000",
    textoPromo: "Válida hasta el 25/08",
    fechaLimite: fechaLimiteActualizacion,
    ajusteNormal: "$4.000",
    ajustePromo: "$3.000"
  },
  logo: {
    normal: "$30.000 ARS",
    promo: "$9.000",
    textoPromo: "Válida hasta el 25/08",
    fechaLimite: fechaLimiteLogo,
    originalPromo: "$15.000"
  }
};

// 🔁 Actualizar precios iniciales
document.querySelectorAll(".precio-inicial").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos) return;
  el.textContent = hoy > datos.fechaLimite ? datos.normal : datos.promo;
});

// 🔁 Actualizar precios promocionales
document.querySelectorAll(".precio-promocional").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos) return;
  el.textContent = hoy > datos.fechaLimite ? datos.normal : datos.promo;
});

// ✅ Mostrar precio original tachado solo si hay promo
document.querySelectorAll(".precio-original").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos || !datos.normal) return;
  el.textContent = datos.normal;
  el.style.display = hoy > datos.fechaLimite ? "none" : "inline";
  el.style.textDecoration = hoy > datos.fechaLimite ? "none" : "line-through";
});

// 🗓️ Fecha de validez
document.querySelectorAll(".promo-fecha").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos || !datos.textoPromo) return;
  el.textContent = datos.textoPromo;
  el.style.display = hoy > datos.fechaLimite ? "none" : "inline";
});

// ❌ Ocultar línea de promo si venció
document.querySelectorAll(".promo-linea").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos) return;
  el.style.display = hoy > datos.fechaLimite ? "none" : "block";
});

// ✅ Mostrar línea de precio final si venció
document.querySelectorAll(".precio-final").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos) return;
  el.style.display = hoy > datos.fechaLimite ? "block" : "none";
});

// 🔁 Actualizar contenido del precio final
document.querySelectorAll(".precio-final-destacado").forEach(el => {
  const tipo = el.dataset.servicio;
  const datos = precios[tipo];
  if (!datos || !datos.normal) return;
  el.textContent = datos.normal;
});

// 🔁 Ajuste menor post-entrega - ACTUALIZACIÓN
document.querySelectorAll(".precio-promocional-ajuste").forEach(el => {
  const datos = precios.actualizacion;
  if (!datos) return;
  el.textContent = hoy > datos.fechaLimite ? datos.ajusteNormal : datos.ajustePromo;
});

document.querySelectorAll(".promo-linea-ajuste").forEach(el => {
  const datos = precios.actualizacion;
  if (!datos) return;
  el.style.display = hoy > datos.fechaLimite ? "none" : "block";
});

// ✅ Precio original tachado en LOGO (promo especial)
document.querySelectorAll(".precio-original-logo").forEach(el => {
  const datos = precios.logo;
  if (!datos || !datos.originalPromo) return;
  el.textContent = datos.originalPromo;
  el.style.display = hoy > datos.fechaLimite ? "none" : "inline";
  el.style.textDecoration = hoy > datos.fechaLimite ? "none" : "line-through";
});
