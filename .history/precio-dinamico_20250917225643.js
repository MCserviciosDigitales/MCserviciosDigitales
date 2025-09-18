document.addEventListener("DOMContentLoaded", () => {
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

  // 🔁 Actualizar elementos por servicio
  ["landing", "flyer", "actualizacion", "logo"].forEach(tipo => {
    const datos = precios[tipo];
    const vencida = hoy > datos.fechaLimite;

    // 🔁 Precio inicial
    document.querySelectorAll(`.precio-inicial[data-servicio="${tipo}"]`).forEach(el => {
      el.textContent = vencida ? datos.normal : datos.promo;
    });

    // 🔁 Precio promocional
    document.querySelectorAll(`.precio-promocional[data-servicio="${tipo}"]`).forEach(el => {
      el.textContent = vencida ? datos.normal : datos.promo;
    });

    // ✅ Precio original tachado
    document.querySelectorAll(`.precio-original[data-servicio="${tipo}"]`).forEach(el => {
      el.textContent = datos.normal;
      el.style.display = vencida ? "none" : "inline";
      el.style.textDecoration = vencida ? "none" : "line-through";
    });

    // 🗓️ Fecha de validez
    document.querySelectorAll(`.promo-fecha[data-servicio="${tipo}"]`).forEach(el => {
      el.textContent = datos.textoPromo;
      el.style.display = vencida ? "none" : "inline";
    });

    // ❌ Ocultar línea de promo si venció
    document.querySelectorAll(`.promo-linea[data-servicio="${tipo}"]`).forEach(el => {
      el.style.display = vencida ? "none" : "block";
    });

    // ✅ Mostrar precio final si venció
    document.querySelectorAll(`.precio-final[data-servicio="${tipo}"]`).forEach(el => {
      el.style.display = vencida ? "block" : "none";
    });

    // 🔁 Actualizar precio final
    document.querySelectorAll(`.precio-final-destacado[data-servicio="${tipo}"]`).forEach(el => {
      el.textContent = datos.normal;
    });
  });

  // 🔁 Ajuste menor post-entrega - ACTUALIZACIÓN
  const datosAct = precios.actualizacion;
  const vencidaAct = hoy > datosAct.fechaLimite;

  document.querySelectorAll(".precio-promocional-ajuste").forEach(el => {
    el.textContent = vencidaAct ? datosAct.ajusteNormal : datosAct.ajustePromo;
  });

  document.querySelectorAll(".promo-linea-ajuste").forEach(el => {
    el.style.display = vencidaAct ? "none" : "block";
  });

  // ✅ Precio original tachado en LOGO (promo especial)
  const datosLogo = precios.logo;
  const vencidaLogo = hoy > datosLogo.fechaLimite;

  document.querySelectorAll(".precio-original-logo").forEach(el => {
    el.textContent = datosLogo.originalPromo;
    el.style.display = vencidaLogo ? "none" : "inline";
    el.style.textDecoration = vencidaLogo ? "none" : "line-through";
  });
});
