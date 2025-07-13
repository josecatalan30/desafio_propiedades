const contenedorVenta = document.querySelector("#venta");
const contenedorAlquiler = document.querySelector("#alquiler");

function mostrarPropiedades(propiedades, contenedor, limite = 3) {
  propiedades.slice(0, limite).forEach((prop) => {
    contenedor.innerHTML +=`
      <div class="propiedad">
        <img src="${prop.src}" alt="${prop.nombre}" />
        <section>
          <h5>${prop.nombre}</h5>
          <div class="detalle">
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
          </div>
          <p class="descripcion">${prop.descripcion}</p>
          <p class="precio">Valor: $${prop.costo.toLocaleString()}</p>
          <p class="extras">
          <span class="${prop.smoke ? "permitido" : "no-permitido"}">
            ${prop.smoke ? "🚬 Se permite fumar" : "❌ No se permite fumar"}
          </span><br>
          <span class="${prop.pets ? "permitido" : "no-permitido"}">
            ${prop.pets ? "🐶 Mascotas permitidas" : "❌ No se permiten mascotas"}
          </span>
          </p>
        </section>
      </div>
    `;
  });
}

mostrarPropiedades(propiedades_venta, contenedorVenta);
mostrarPropiedades(propiedades_alquiler, contenedorAlquiler);