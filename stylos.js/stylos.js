/* ==========================================================================
   STYLOS.JS - Helper de estilos dinámicos y clases visuales BEM para RODAR
   Permite aplicar, alternar o leer variables CSS (:root) y clases BEM desde JS
   sin mezclar reglas de diseño fijas dentro de la lógica de la aplicación.
   ========================================================================== */

// 1. MAPA CENTRAL DE CLASES VISUALES BEM Y VARIABLES DEL PROYECTO
// Agrupa en un solo lugar las clases que controlan visibilidad, estados y temas.
const rodStyleClasses = {
  pageHidden: "page--hidden",               // Oculta secciones inactivas (reset.css)
  navOpen: "header__nav--open",             // Despliega menú en móvil (main.css)
  linkActive: "header__link--active",       // Marca enlace activo en header (header.css)
  pillActive: "filters__pill--active",      // Resalta píldora de filtro activa (main.css)
  emptyHidden: "catalog__empty--hidden",    // Oculta mensaje sin resultados (main.css)
  favActive: "car-card__fav--active",       // Colorea corazón de favorito (main.css)
  modalHidden: "modal--hidden"              // Oculta ventana modal (main.css)
};

// 2. LEER O MODIFICAR VARIABLES CSS GLOBALES (:root en reset.css)
function getStyleVar(varName) {
  // Lee el valor actual de una variable CSS como "--color-accent" o "--max-width"
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

function setStyleVar(varName, value) {
  // Actualiza una variable en :root para cambiar el estilo en toda la página
  document.documentElement.style.setProperty(varName, value);
}

// 3. ALTERNAR O ASIGNAR CLASES BEM DE FORMA SEGURA EN EL DOM
function toggleStyleClass(element, className, forceState) {
  if (!element) return;
  if (typeof forceState === "boolean") {
    element.classList.toggle(className, forceState);
  } else {
    element.classList.toggle(className);
  }
}

// 4. CONTROL VISUAL DE VISTAS, MENÚ MÓVIL Y MODAL
function setActiveViewStyle(route) {
  // Oculta todas las secciones (.page) y muestra solo la vista solicitada
  document.querySelectorAll(".page").forEach(section => {
    section.classList.add(rodStyleClasses.pageHidden);
  });

  const targetSection = document.getElementById(`view-${route}`);
  if (targetSection) {
    targetSection.classList.remove(rodStyleClasses.pageHidden);
  }

  // Actualiza el indicador activo en los enlaces del encabezado
  document.querySelectorAll(".header__link").forEach(link => {
    const isCurrent = link.dataset.route === route;
    link.classList.toggle(rodStyleClasses.linkActive, isCurrent);
  });
}

function toggleMobileMenuStyle(navElement) {
  // Abre o cierra el menú de navegación en pantallas pequeñas (<= 768px)
  toggleStyleClass(navElement, rodStyleClasses.navOpen);
}

function closeMobileMenuStyle(navElement) {
  if (navElement) {
    navElement.classList.remove(rodStyleClasses.navOpen);
  }
}

function setModalVisibilityStyle(modalElement, isVisible) {
  // Muestra el modal quitando .modal--hidden o lo oculta agregándola
  if (!modalElement) return;
  modalElement.classList.toggle(rodStyleClasses.modalHidden, !isVisible);
}

// 5. EJEMPLO RÁPIDO DE CAMBIO DE ACENTO VISUAL (Naranja RODAR <-> Esmeralda)
function applyElectricAccentTheme(enableElectricTheme) {
  if (enableElectricTheme) {
    setStyleVar("--color-accent", "#059669");
  } else {
    setStyleVar("--color-accent", "#d95d24");
  }
}
