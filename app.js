const carsData = [
  // TOYOTA (10 modelos)
  { id: 1, brand: "TOYOTA", name: "RAV4 Hybrid", year: 2025, type: "SUV", fuel: "Híbrido", hp: "219 hp", speed: "180 km/h", seats: "5 personas", score: "9.2 / 10", ideal: "Familias activas", desc: "Eficiente, espaciosa y preparada para cualquier ruta.", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=700&q=80" },
  { id: 2, brand: "TOYOTA", name: "Corolla", year: 2025, type: "Sedán", fuel: "Gasolina", hp: "169 hp", speed: "195 km/h", seats: "5 personas", score: "8.9 / 10", ideal: "Ciudad y uso diario", desc: "Confiabilidad probada con tecnología intuitiva.", img: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=700&q=80" },
  { id: 3, brand: "TOYOTA", name: "4Runner", year: 2025, type: "SUV", fuel: "Gasolina", hp: "278 hp", speed: "185 km/h", seats: "7 personas", score: "9.1 / 10", ideal: "Aventura y familia", desc: "Capacidad auténtica para salir del asfalto con toda la familia.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80" },
  { id: 4, brand: "TOYOTA", name: "Camry Hybrid", year: 2025, type: "Sedán", fuel: "Híbrido", hp: "225 hp", speed: "210 km/h", seats: "5 personas", score: "9.1 / 10", ideal: "Confort ejecutivo", desc: "Sedán amplio, silencioso y eficiente para recorrer largas distancias.", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=700&q=80" },
  { id: 5, brand: "TOYOTA", name: "bZ4X", year: 2025, type: "Crossover", fuel: "Eléctrico", hp: "214 hp", speed: "160 km/h", seats: "5 personas", score: "8.6 / 10", ideal: "Movilidad cero emisiones", desc: "Crossover eléctrico espacioso, sereno y fácil de conducir.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=700&q=80" },
  { id: 6, brand: "TOYOTA", name: "Hilux", year: 2025, type: "Pickup", fuel: "Gasolina", hp: "204 hp", speed: "175 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Trabajo y rutas exigentes", desc: "Pickup robusta y confiable, lista para el trabajo o los caminos difíciles.", img: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=700&q=80" },
  { id: 7, brand: "TOYOTA", name: "Land Cruiser", year: 2025, type: "SUV", fuel: "Híbrido", hp: "326 hp", speed: "190 km/h", seats: "7 personas", score: "9.4 / 10", ideal: "Exploración de alto nivel", desc: "Capacidad legendaria, fuerza híbrida y comodidad para explorar lejos.", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80" },
  { id: 8, brand: "TOYOTA", name: "Prius", year: 2025, type: "Sedán", fuel: "Híbrido", hp: "196 hp", speed: "180 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Máximo ahorro de combustible", desc: "Eficiencia híbrida de referencia con un diseño más dinámico y moderno.", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=700&q=80" },
  { id: 9, brand: "TOYOTA", name: "Yaris Cross Hybrid", year: 2025, type: "SUV", fuel: "Híbrido", hp: "116 hp", speed: "170 km/h", seats: "5 personas", score: "8.7 / 10", ideal: "Ciudad y estacionamiento ágil", desc: "SUV híbrida compacta, eficiente y fácil de disfrutar en la ciudad.", img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=700&q=80" },
  { id: 10, brand: "TOYOTA", name: "Tacoma", year: 2025, type: "Pickup", fuel: "Híbrido", hp: "326 hp", speed: "180 km/h", seats: "5 personas", score: "9.1 / 10", ideal: "Aventura todoterreno", desc: "Pickup mediana potente, tecnológica y preparada para salir del asfalto.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80" },

  // HONDA (4 modelos)
  { id: 11, brand: "HONDA", name: "Civic", year: 2025, type: "Sedán", fuel: "Híbrido", hp: "200 hp", speed: "200 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Ciudad y carretera", desc: "Ágil, refinado y equilibrado para disfrutar cada kilómetro.", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=700&q=80" },
  { id: 12, brand: "HONDA", name: "CR-V Hybrid", year: 2025, type: "SUV", fuel: "Híbrido", hp: "204 hp", speed: "185 km/h", seats: "5 personas", score: "9.2 / 10", ideal: "Familias y comodidad", desc: "Una SUV familiar refinada, versátil y de consumo contenido.", img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=700&q=80" },
  { id: 13, brand: "HONDA", name: "HR-V", year: 2025, type: "Crossover", fuel: "Gasolina", hp: "158 hp", speed: "185 km/h", seats: "5 personas", score: "8.7 / 10", ideal: "Movilidad urbana", desc: "Tamaño urbano, cabina práctica y conducción muy sencilla.", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80" },
  { id: 14, brand: "HONDA", name: "Prologue", year: 2025, type: "Crossover", fuel: "Eléctrico", hp: "288 hp", speed: "180 km/h", seats: "5 personas", score: "8.9 / 10", ideal: "Espacio eléctrico familiar", desc: "SUV eléctrica de gran espacio con una experiencia tecnológica limpia.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=700&q=80" },

  // MAZDA (3 modelos)
  { id: 15, brand: "MAZDA", name: "CX-50", year: 2025, type: "SUV", fuel: "Gasolina", hp: "256 hp", speed: "210 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Conducción dinámica", desc: "Diseño envolvente y manejo preciso en cada curva.", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80" },
  { id: 16, brand: "MAZDA", name: "Mazda3", year: 2025, type: "Sedán", fuel: "Gasolina", hp: "191 hp", speed: "205 km/h", seats: "5 personas", score: "8.9 / 10", ideal: "Estilo y precisión", desc: "Acabados cuidados y manejo preciso en un sedán compacto.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80" },
  { id: 17, brand: "MAZDA", name: "CX-30", year: 2025, type: "Crossover", fuel: "Gasolina", hp: "186 hp", speed: "198 km/h", seats: "5 personas", score: "8.8 / 10", ideal: "Ciudad con toque deportivo", desc: "Agilidad urbana con interior refinado y respuesta inmediata.", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=700&q=80" },

  // HYUNDAI (4 modelos)
  { id: 18, brand: "HYUNDAI", name: "Ioniq 5", year: 2025, type: "Crossover", fuel: "Eléctrico", hp: "320 hp", speed: "185 km/h", seats: "5 personas", score: "9.4 / 10", ideal: "Tecnología y carga rápida", desc: "Tecnología eléctrica, carga rápida y un interior sorprendente.", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=700&q=80" },
  { id: 19, brand: "HYUNDAI", name: "Kona", year: 2025, type: "Crossover", fuel: "Híbrido", hp: "141 hp", speed: "172 km/h", seats: "5 personas", score: "8.8 / 10", ideal: "Entorno urbano", desc: "Crossover compacto, práctico y lleno de personalidad.", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80" },
  { id: 20, brand: "HYUNDAI", name: "Tucson Hybrid", year: 2025, type: "SUV", fuel: "Híbrido", hp: "231 hp", speed: "190 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Tecnología familiar", desc: "Diseño vanguardista con amplio espacio y asistencia inteligente.", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=700&q=80" },
  { id: 21, brand: "HYUNDAI", name: "Elantra", year: 2025, type: "Sedán", fuel: "Gasolina", hp: "147 hp", speed: "195 km/h", seats: "5 personas", score: "8.6 / 10", ideal: "Trayectos diarios", desc: "Sedán moderno, cómodo y equipado con pantallas digitales.", img: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=700&q=80" },

  // KIA (3 modelos)
  { id: 22, brand: "KIA", name: "EV6", year: 2025, type: "Crossover", fuel: "Eléctrico", hp: "320 hp", speed: "192 km/h", seats: "5 personas", score: "9.3 / 10", ideal: "Diseño deportivo eléctrico", desc: "Carga rápida, diseño distintivo y excelente respuesta eléctrica.", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=700&q=80" },
  { id: 23, brand: "KIA", name: "K5", year: 2025, type: "Sedán", fuel: "Gasolina", hp: "191 hp", speed: "210 km/h", seats: "5 personas", score: "8.8 / 10", ideal: "Estilo deportivo", desc: "Imagen deportiva, buen espacio y conducción agradable.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80" },
  { id: 24, brand: "KIA", name: "Sportage Hybrid", year: 2025, type: "SUV", fuel: "Híbrido", hp: "227 hp", speed: "188 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Versatilidad diaria", desc: "SUV equilibrada, cómoda y con gran capacidad de maletero.", img: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=700&q=80" },

  // TESLA (5 modelos)
  { id: 25, brand: "TESLA", name: "Model Y Long Range", year: 2025, type: "SUV", fuel: "Eléctrico", hp: "384 hp", speed: "217 km/h", seats: "5 personas", score: "9.3 / 10", ideal: "Autonomía y familia", desc: "SUV eléctrica espaciosa, eficiente y preparada para la vida familiar.", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=700&q=80" },
  { id: 26, brand: "TESLA", name: "Model S Plaid", year: 2025, type: "Sedán", fuel: "Eléctrico", hp: "1,020 hp", speed: "322 km/h", seats: "5 personas", score: "9.6 / 10", ideal: "Máximo rendimiento", desc: "Prestaciones extraordinarias con una cabina amplia y silenciosa.", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80" },
  { id: 27, brand: "TESLA", name: "Cybertruck AWD", year: 2025, type: "Pickup", fuel: "Eléctrico", hp: "600 hp", speed: "180 km/h", seats: "5 personas", score: "9.0 / 10", ideal: "Fuerza y estilo único", desc: "Pickup eléctrica de diseño radical, gran fuerza y enorme versatilidad.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80" },
  { id: 28, brand: "TESLA", name: "Model 3 Long Range", year: 2025, type: "Sedán", fuel: "Eléctrico", hp: "366 hp", speed: "201 km/h", seats: "5 personas", score: "9.2 / 10", ideal: "Eficiencia y tecnología", desc: "Gran autonomía, aceleración inmediata y tecnología minimalista.", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=700&q=80" },
  { id: 29, brand: "TESLA", name: "Model X", year: 2025, type: "Crossover", fuel: "Eléctrico", hp: "670 hp", speed: "250 km/h", seats: "6 personas", score: "9.1 / 10", ideal: "Tecnología y espacio", desc: "Puertas Falcon Wing, gran potencia y comodidad para toda la familia.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=700&q=80" }
];

let favorites = [1, 11];
let activeType = "Todos";

function navigateTo(route) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("page--hidden"));
  const target = document.getElementById(`view-${route}`);
  if (target) target.classList.remove("page--hidden");

  document.querySelectorAll(".header__link").forEach(link => {
    link.classList.toggle("header__link--active", link.dataset.route === route);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-route]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo(el.dataset.route);
  });
});

function createCarCard(car) {
  const isFav = favorites.includes(car.id);
  return `
    <article class="car-card">
      <div class="car-card__media">
        <span class="car-card__year">${car.year}</span>
        <button type="button" class="car-card__fav ${isFav ? "car-card__fav--active" : ""}" onclick="toggleFavorite(${car.id})">
          ${isFav ? "♥" : "♡"}
        </button>
        <img class="car-card__img" src="${car.img}" alt="${car.name}">
      </div>
      <div class="car-card__body">
        <span class="car-card__brand">${car.brand}</span>
        <h3 class="car-card__name">${car.name}</h3>
        <p class="car-card__desc">${car.desc}</p>
        <div class="car-card__specs">
          <span class="car-card__tag">${car.type}</span>
          <span class="car-card__tag">${car.fuel}</span>
          <span class="car-card__tag">${car.hp}</span>
        </div>
        <div class="car-card__footer">
          <button type="button" class="car-card__details-btn" onclick="openDetails(${car.id})">Ver detalles →</button>
          <button type="button" class="car-card__compare-btn" onclick="sendToCompare(${car.id})">+ Comparar</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featuredCars = [carsData[0], carsData[1], carsData[2]];
  document.getElementById("featuredGrid").innerHTML = featuredCars.map(createCarCard).join("");
}

function renderCatalog() {
  const search = document.getElementById("catalogSearch").value.toLowerCase();
  const brand = document.getElementById("brandSelect").value;
  const fuel = document.getElementById("fuelSelect").value;

  const filtered = carsData.filter(car => {
    const matchType = activeType === "Todos" || car.type === activeType;
    const matchBrand = brand === "Todas" || car.brand === brand;
    const matchFuel = fuel === "Todos" || car.fuel === fuel;
    const matchSearch = car.name.toLowerCase().includes(search) || car.brand.toLowerCase().includes(search) || car.type.toLowerCase().includes(search);
    return matchType && matchBrand && matchFuel && matchSearch;
  });

  document.getElementById("modelsCount").textContent = `${filtered.length} modelos seleccionados para explorar`;
  document.getElementById("catalogGrid").innerHTML = filtered.map(createCarCard).join("");
  document.getElementById("catalogEmpty").classList.toggle("catalog__empty--hidden", filtered.length > 0);
}

function resetAllFilters() {
  activeType = "Todos";
  document.querySelectorAll("#categoryPills .filters__pill").forEach((b, i) => b.classList.toggle("filters__pill--active", i === 0));
  document.getElementById("catalogSearch").value = "";
  document.getElementById("brandSelect").value = "Todas";
  document.getElementById("fuelSelect").value = "Todos";
  renderCatalog();
}

document.querySelectorAll("#categoryPills .filters__pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#categoryPills .filters__pill").forEach(b => b.classList.remove("filters__pill--active"));
    btn.classList.add("filters__pill--active");
    activeType = btn.dataset.type;
    renderCatalog();
  });
});

document.getElementById("catalogSearch").addEventListener("input", renderCatalog);
document.getElementById("brandSelect").addEventListener("change", renderCatalog);
document.getElementById("fuelSelect").addEventListener("change", renderCatalog);
document.getElementById("resetFiltersBtn").addEventListener("click", resetAllFilters);
document.getElementById("emptyResetBtn").addEventListener("click", resetAllFilters);

function renderElectrics() {
  const query = document.getElementById("electricSearch").value.toLowerCase();
  const electrics = carsData.filter(c => c.fuel === "Eléctrico" && (c.name.toLowerCase().includes(query) || c.brand.toLowerCase().includes(query)));
  document.getElementById("electricCount").textContent = electrics.length;
  document.getElementById("electricGrid").innerHTML = electrics.map(createCarCard).join("");
}
document.getElementById("electricSearch").addEventListener("input", renderElectrics);

function renderBrands() {
  const brandsInfo = [
    { key: "TOYOTA", name: "Toyota", letter: "T", slogan: "Confiabilidad que inspira" },
    { key: "HONDA", name: "Honda", letter: "H", slogan: "Ingeniería inteligente" },
    { key: "MAZDA", name: "Mazda", letter: "M", slogan: "Diseño que se conduce" },
    { key: "HYUNDAI", name: "Hyundai", letter: "H", slogan: "Innovación para todos" },
    { key: "KIA", name: "Kia", letter: "K", slogan: "Movimiento que inspira" },
    { key: "TESLA", name: "Tesla", letter: "T", slogan: "El futuro es eléctrico" }
  ];

  document.getElementById("brandsGrid").innerHTML = brandsInfo.map(b => {
    const count = carsData.filter(c => c.brand === b.key).length;
    return `
      <article class="brand-card" onclick="filterByBrand('${b.key}')">
        <div class="brand-card__badge">${b.letter}</div>
        <h3 class="brand-card__name">${b.name}</h3>
        <p class="brand-card__slogan">${b.slogan}</p>
        <span class="brand-card__count">${count} modelos disponibles →</span>
      </article>
    `;
  }).join("");
}

window.filterByBrand = (brandKey) => {
  resetAllFilters();
  navigateTo("catalogo");
  document.getElementById("brandSelect").value = brandKey;
  renderCatalog();
};

document.querySelectorAll(".type-card").forEach(card => {
  card.addEventListener("click", () => {
    const type = card.dataset.filterType;
    resetAllFilters();
    navigateTo("catalogo");
    if (type === "Eléctrico" || type === "Híbrido") {
      document.getElementById("fuelSelect").value = type;
    } else {
      activeType = type;
      document.querySelectorAll("#categoryPills .filters__pill").forEach(b => b.classList.toggle("filters__pill--active", b.dataset.type === type));
    }
    renderCatalog();
  });
});

function initCompare() {
  const s1 = document.getElementById("compareSelect1");
  const s2 = document.getElementById("compareSelect2");
  const s3 = document.getElementById("compareSelect3");

  const options = carsData.map(c => `<option value="${c.id}">${c.brand} ${c.name}</option>`).join("");
  s1.innerHTML = options;
  s2.innerHTML = options;
  s3.innerHTML = `<option value="">+ Agregar un modelo</option>` + options;

  s1.value = "1";
  s2.value = "11";

  [s1, s2, s3].forEach(sel => sel.addEventListener("change", renderCompareTable));
  renderCompareTable();
}

function renderCompareTable() {
  const ids = [
    document.getElementById("compareSelect1").value,
    document.getElementById("compareSelect2").value,
    document.getElementById("compareSelect3").value
  ].filter(Boolean).map(Number);

  const selectedCars = ids.map(id => carsData.find(c => c.id === id));

  const rows = [
    { label: "Modelo", render: c => `<img class="compare__car-img" src="${c.img}" alt="${c.name}"><div><strong>${c.brand} ${c.name}</strong></div>` },
    { label: "Calificación", render: c => `<strong>${c.score}</strong>` },
    { label: "Tipo", render: c => c.type },
    { label: "Motorización", render: c => c.fuel },
    { label: "Potencia", render: c => c.hp },
    { label: "Velocidad máxima", render: c => c.speed },
    { label: "Asientos", render: c => c.seats },
    { label: "Ideal para", render: c => c.ideal }
  ];

  document.getElementById("compareTable").innerHTML = rows.map(row => `
    <tr>
      <td>${row.label}</td>
      ${selectedCars.map(c => `<td>${row.render(c)}</td>`).join("")}
    </tr>
  `).join("");

  const winner = selectedCars[0];
  document.getElementById("verdictBox").innerHTML = `
    <span class="verdict__label">NUESTRO VEREDICTO</span>
    <h3 class="verdict__title">${winner.brand} ${winner.name} es la opción más completa</h3>
    <p>Destaca por su enfoque en <strong>${winner.ideal.toLowerCase()}</strong>, motorización ${winner.fuel.toLowerCase()} (${winner.hp}) y calificación de ${winner.score}.</p>
  `;
}

window.sendToCompare = (carId) => {
  document.getElementById("compareSelect2").value = String(carId);
  renderCompareTable();
  navigateTo("comparar");
};

window.toggleFavorite = (carId) => {
  if (favorites.includes(carId)) {
    favorites = favorites.filter(id => id !== carId);
  } else {
    favorites.push(carId);
  }
  document.getElementById("favBadge").textContent = favorites.length;
  renderFeatured();
  renderCatalog();
  renderElectrics();
};

window.openDetails = (carId) => {
  const car = carsData.find(c => c.id === carId);
  document.getElementById("modalBody").innerHTML = `
    <img src="${car.img}" alt="${car.name}" style="width:100%;height:220px;object-fit:cover;border-radius:14px;margin-bottom:16px;">
    <span style="color:#d95d24;font-weight:700;font-size:0.8rem;">${car.brand} • ${car.year}</span>
    <h2 style="margin:4px 0 8px;">${car.name}</h2>
    <p style="color:#57534e;margin-bottom:16px;">${car.desc}</p>
    <p><strong>Motor:</strong> ${car.fuel} | <strong>Potencia:</strong> ${car.hp} | <strong>Velocidad máx:</strong> ${car.speed}</p>
    <p style="margin-top:6px;"><strong>Ideal para:</strong> ${car.ideal} | <strong>Calificación:</strong> ${car.score}</p>
  `;
  document.getElementById("detailModal").classList.remove("modal--hidden");
};

function openFavoritesModal() {
  const favCars = carsData.filter(c => favorites.includes(c.id));
  document.getElementById("modalBody").innerHTML = `
    <h2 style="margin-bottom:12px;">Tus autos favoritos (${favCars.length})</h2>
    ${favCars.length === 0 ? "<p>Aún no tienes autos guardados en favoritos.</p>" : favCars.map(c => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #eee;">
        <div><strong>${c.brand} ${c.name}</strong><div style="font-size:0.82rem;color:#57534e;">${c.type} • ${c.fuel} • ${c.hp}</div></div>
        <button type="button" onclick="toggleFavorite(${c.id});openFavoritesModal();" style="color:#d95d24;border:none;background:none;cursor:pointer;font-weight:600;">Quitar</button>
      </div>
    `).join("")}
  `;
  document.getElementById("detailModal").classList.remove("modal--hidden");
}

document.getElementById("btnFavorites").addEventListener("click", openFavoritesModal);
document.getElementById("footerFavLink").addEventListener("click", (e) => { e.preventDefault(); openFavoritesModal(); });
document.getElementById("closeModalBtn").addEventListener("click", () => document.getElementById("detailModal").classList.add("modal--hidden"));

document.getElementById("heroSearchBtn").addEventListener("click", () => {
  const q = document.getElementById("heroSearchInput").value;
  resetAllFilters();
  navigateTo("catalogo");
  document.getElementById("catalogSearch").value = q;
  renderCatalog();
});

document.querySelectorAll("[data-quick-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    resetAllFilters();
    navigateTo("catalogo");
    document.getElementById("catalogSearch").value = btn.dataset.quickFilter;
    renderCatalog();
  });
});

renderFeatured();
renderCatalog();
renderElectrics();
renderBrands();
initCompare();