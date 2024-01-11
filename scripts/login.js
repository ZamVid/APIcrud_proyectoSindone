document.addEventListener('DOMContentLoaded', function () {
    var adContainer = document.querySelector('.ad-container');
    var initialOffset = adContainer.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;

        if (scrollY > initialOffset) {
            adContainer.style.top = (scrollY - initialOffset) + 'px';
        } else {
            adContainer.style.top = '20px';
        }
    });
});

function validarFormulario() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, ingrese nombre de usuario y contraseña.');
        return false;
    }
    return true; 
}

function olvidasteContrasena() {
    alert('Oh no! Olvidaste tu contraseña! Pero esto solo es una prueba, así que no hay una acción real aquí ;)');
}

function registrate() {
    alert('Bienvenido! Aun no hay una acción real aquí :(');
}

function validarFormulario() {
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    if (!validarEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    if (comments.trim() === '') {
        alert('Por favor, ingrese sus comentarios.');
        return false;
    }
    alert('Formulario enviado con éxito!');
    return true;
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function resetForm() {
    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');

    var slides1 = slider1.querySelectorAll('.slide');
    var slides2 = slider2.querySelectorAll('.slide');

    var slideIndex1 = 0;
    var slideIndex2 = 0;

    function mostrarSlide(slider, index) {
        slider.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function avanzarSlide(slider, slides, index) {
        index = (index + 1) % slides.length;
        mostrarSlide(slider, index);
        return index;
    }

    function retrocederSlide(slider, slides, index) {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(slider, index);
        return index;
    }

    setInterval(function () {
        slideIndex1 = avanzarSlide(slider1, slides1, slideIndex1);
    }, 5000);

    setInterval(function () {
        slideIndex2 = avanzarSlide(slider2, slides2, slideIndex2);
    }, 6000);
});
