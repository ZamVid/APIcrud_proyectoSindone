const formulario = document.getElementById("formulario");
const botonPublicar = document.getElementById("publicar");
const contenedorPosts = document.getElementById("posts");

function agregarPost() {
  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;

  if (titulo.trim() !== "" && contenido.trim() !== "") {
    const nuevoPost = document.createElement("div");
    nuevoPost.classList.add("post");

    const tituloPost = document.createElement("h2");
    tituloPost.textContent = titulo;

    const contenidoPost = document.createElement("p");
    contenidoPost.textContent = contenido;

    const autorPost = document.createElement("p");
    autorPost.textContent = "Autor: UsuarioX"; // Puedes cambiar UsuarioX por el nombre del usuario que publica

    nuevoPost.appendChild(tituloPost);
    nuevoPost.appendChild(contenidoPost);
    nuevoPost.appendChild(autorPost);

    contenedorPosts.appendChild(nuevoPost);

    // Limpiar campos después de publicar
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

botonPublicar.addEventListener("click", agregarPost);
