document.addEventListener("DOMContentLoaded", () => {
  
  // 1. CAPTURAR TODAS LAS TARJETAS DE SERVICIOS
  const tarjetas = document.querySelectorAll(".card");

  tarjetas.forEach(tarjeta => {
    const contenidoPrincipal = tarjeta.querySelector(".contenido-principal");
    const detalleServicio = tarjeta.querySelector(".detalle-servicio");
    
    const botonVerDetalle = tarjeta.querySelector(".ver-detalle");
    const botonVolver = tarjeta.querySelector(".volver");

    // 2. LOGICA PARA MOSTRAR LOS DETALLES
    if (botonVerDetalle && botonVolver) {
      
      // Cuando hacen click en "Ver detalles" -> Oculta el frente y muestra el dorso
      botonVerDetalle.addEventListener("click", () => {
        contenidoPrincipal.style.display = "none";
        detalleServicio.style.display = "block";
      });

      // Cuando hacen click en "Volver" -> Oculta el dorso y muestra el frente
      botonVolver.addEventListener("click", () => {
        detalleServicio.style.display = "none";
        contenidoPrincipal.style.display = "block";
      });
    }
  });

});

// Lógica del Popup para ver la web de la banda
// Funciones globales para el modal de la banda
window.abrirMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  const iframe = document.getElementById("iframeWeb");
  if (modal && iframe) {
    iframe.src = "https://crazynight.netlify.app/";
    modal.style.display = "block";
  }
};

window.cerrarMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  const iframe = document.getElementById("iframeWeb");
  if (modal && iframe) {
    modal.style.display = "none";
    iframe.src = ""; // Corta la música o videos de la web de la banda
  }
};

// Cerrar si hacen clic fuera del modal
window.addEventListener("click", (e) => {
  const modal = document.getElementById("miModalWeb");
  if (e.target === modal) {
    window.cerrarMiModal();
  }
});

/* ==========================================================
   1. CONTROL DEL SWITCH (SOBRE MÍ / SERVICIOS) Y CARTELITO
   ========================================================== */
const toggle = document.getElementById("toggleView");
const sobreMi = document.getElementById("sobre-mi");
const servicios = document.getElementById("servicios");
const textoModo = document.getElementById("modoTexto");
const cartelito = document.getElementById("cartelito-switch");

// Configuración inicial al cargar la página:
// Mostramos "Sobre mí" y ocultamos "Servicios"
if (sobreMi && servicios) {
  sobreMi.style.display = "block";
  servicios.style.display = "none";
}

// Lógica para el botón switch
if (toggle) {
  toggle.addEventListener("change", () => {
    // 1. Borramos el cartelito animado al tocar el switch
    if (cartelito) {
      cartelito.style.display = "none";
    }

    // 2. Si el switch está ACTIVADO (derecha) -> Mostramos Servicios y ocultamos Sobre mí
    if (toggle.checked) {
      sobreMi.style.display = "none";
      servicios.style.display = "block";
      if (textoModo) textoModo.textContent = "🛠 Servicios";
    } 
    // 3. Si el switch está DESACTIVADO (izquierda) -> Mostramos Sobre mí y ocultamos Servicios
    else {
      sobreMi.style.display = "block";
      servicios.style.display = "none";
      if (textoModo) textoModo.textContent = "💁 Sobre mí";
    }
  });
}

/* ==========================================================
   2. EFECTO VOLTEAR TARJETAS (VER DETALLES / VOLVER)
   ========================================================== */
const verBotones = document.querySelectorAll(".ver-detalle");
const volverBotones = document.querySelectorAll(".volver");

verBotones.forEach(boton => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".card");
    if (card) {
      const contenidoPrincipal = card.querySelector(".contenido-principal");
      const detalleServicio = card.querySelector(".detalle-servicio");
      if (contenidoPrincipal && detalleServicio) {
        contenidoPrincipal.style.display = "none";
        detalleServicio.style.display = "block";
      }
    }
  });
});

volverBotones.forEach(boton => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".card");
    if (card) {
      const contenidoPrincipal = card.querySelector(".contenido-principal");
      const detalleServicio = card.querySelector(".detalle-servicio");
      if (contenidoPrincipal && detalleServicio) {
        detalleServicio.style.display = "none";
        contenidoPrincipal.style.display = "block";
      }
    }
  });
});

/* ==========================================================
   3. MODAL DE VISTA PREVIA (PÁGINA DE LA BANDA DE ROCK)
   ========================================================== */
window.abrirMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  const iframe = document.getElementById("iframeWeb");
  if (modal && iframe) {
    iframe.src = "https://crazynight.netlify.app/";
    modal.style.display = "block";
  }
};

window.cerrarMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  const iframe = document.getElementById("iframeWeb");
  if (modal && iframe) {
    modal.style.display = "none";
    iframe.src = "";
  }
};

// Cerrar si hacen clic fuera del modal
window.addEventListener("click", (e) => {
  const modal = document.getElementById("miModalWeb");
  if (e.target === modal) {
    window.cerrarMiModal();
  }
});