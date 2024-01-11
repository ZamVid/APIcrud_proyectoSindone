// zoomImagen.js

// Obtener todas las imágenes en el documento
const images = document.querySelectorAll('img');

// Iterar sobre cada imagen para agregar un evento de clic
images.forEach(image => {
    image.addEventListener('click', () => {
        // Clonar la imagen clicada
        const cloneImg = image.cloneNode(true);

        // Crear un modal y agregar la imagen clonada al modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.appendChild(cloneImg);

        // Mostrar el modal agregándolo al body
        document.body.appendChild(modal);

        // Agregar un evento de clic al modal para cerrarlo
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});