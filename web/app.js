const baseUrl = "https://simpsons-api.onrender.com";

// Cargar IDs en los <select>
window.addEventListener("DOMContentLoaded", async () => {
  const selectFrase = document.getElementById("select-frase");
  const selectPersonaje = document.getElementById("select-personaje");
  const selectCapitulo = document.getElementById("select-capitulo");

  try {
    // Cargar frases
    const resFrases = await fetch(`${baseUrl}/frases`);
    const frases = await resFrases.json();
    selectFrase.innerHTML = frases
      .map((frase) => `<option value="${frase.id}">${frase.id}</option>`)
      .join("");

    // Cargar personajes
    const resPersonajes = await fetch(`${baseUrl}/personajes`);
    const personajes = await resPersonajes.json();
    selectPersonaje.innerHTML = personajes
      .map((p) => `<option value="${p.id}">${p.id} - ${p.nombre}</option>`)
      .join("");

    // Cargar capítulos
    const resCapitulos = await fetch(`${baseUrl}/capitulos`);
    const capitulos = await resCapitulos.json();
    selectCapitulo.innerHTML = capitulos
      .map((c) => `<option value="${c.id}">${c.id} - ${c.titulo}</option>`)
      .join("");
  } catch (error) {
    selectFrase.innerHTML = `<option>Error al cargar frases</option>`;
    selectPersonaje.innerHTML = `<option>Error al cargar personajes</option>`;
    selectCapitulo.innerHTML = `<option>Error al cargar capítulos</option>`;
  }
});

// Abrir frase por ID
document.getElementById("btn-frase").addEventListener("click", () => {
  const id = document.getElementById("select-frase").value;
  window.open(`${baseUrl}/frases/${id}`, "_blank");
});

// Abrir frases por personaje ID
document.getElementById("btn-personaje").addEventListener("click", () => {
  const id = document.getElementById("select-personaje").value;
  window.open(`${baseUrl}/frases/personaje/${id}`, "_blank");
});

// Abrir frases por capítulo ID
document.getElementById("btn-capitulo").addEventListener("click", () => {
  const id = document.getElementById("select-capitulo").value;
  window.open(`${baseUrl}/frases/capitulo/${id}`, "_blank");
});
