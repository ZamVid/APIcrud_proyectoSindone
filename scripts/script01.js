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

function validarFormularioLogin() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username.trim() === '') {
        alert('Por favor, ingrese nombre de usuario.');
        cambiarColorFondo(usernameInput, 'red');
        return false;
    } else if (/\s/.test(username)) {
        alert('El nombre de usuario no puede contener espacios.');
        cambiarColorFondo(usernameInput, 'red');
        return false;
    }

    if (password.trim() === '') {
        alert('Por favor, ingrese contraseña.');
        cambiarColorFondo(passwordInput, 'red');
        return false;
    }

    cambiarColorFondo(usernameInput, '');
    cambiarColorFondo(passwordInput, '');

    return true;
}

function cambiarColorFondo(elemento, color) {
    elemento.style.backgroundColor = color;
}


function cambiarColorTexto(elemento, color) {
    elemento.style.color = color;
}


function olvidasteContrasena() {
    alert('Oh no! Olvidaste tu contraseña! Pero esto solo es una prueba, así que no hay una acción real aquí ;)');
}

function registrate() {
    alert('Bienvenido! Aun no hay una acción real aquí :(');
}

function validarFormularioContacto() {
    var nombreInput = document.getElementById('nombre');
    var apellidosInput = document.getElementById('apellidos');
    var emailInput = document.getElementById('email');
    var commentsInput = document.getElementById('comments');

    var email = emailInput.value;
    var comments = commentsInput.value;

    if (!validarEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        cambiarColorFondo(emailInput, 'red');
        return false;
    }

    if (comments.trim() === '') {
        alert('Por favor, ingrese sus comentarios.');
        cambiarColorFondo(commentsInput, 'red');
        return false;
    }

    cambiarColorFondo(emailInput, '');
    cambiarColorFondo(commentsInput, '');

    alert('Formulario enviado con éxito!');
    return true;
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function cambiarColorFondo(elemento, color) {
    elemento.style.backgroundColor = color;
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

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('ventaForm');
    form.addEventListener('input', actualizarResumen);

    var form = document.getElementById('ventaForm');
    form.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    function actualizarResumen() {
        var resumenCompra = document.getElementById('resumenCompra');
        var totalVenta = document.getElementById('totalVenta');
        var productosSeleccionados = document.querySelectorAll('input[name="productos"]:checked');
        var total = 0;

        resumenCompra.innerHTML = ''; 

        productosSeleccionados.forEach(function (producto) {
            var cantidadInput = document.getElementById('cantidad' + producto.value.charAt(producto.value.length - 1));
            var cantidad = parseInt(cantidadInput.value, 10) || 0;
            var subtotal = cantidad * obtenerPrecio(producto.value);

            var listItem = document.createElement('li');
            listItem.textContent = producto.value + ' - Cantidad: ' + cantidad + ' - Subtotal: $' + subtotal.toFixed(2);
            resumenCompra.appendChild(listItem);

            total += subtotal;
        });

        totalVenta.textContent = total.toFixed(2);
    }

    function obtenerPrecio(producto) {
        switch (producto) {
            case 'Producto 1':
                return 250;
            case 'Producto 2':
                return 120;
            case 'Producto 3':
                return 80;
            default:
                return 0;
        }
    }

    function validarFormulario() {
        var aceptoTerminos = document.getElementById('aceptoTerminos').checked;
        var productosSeleccionados = document.querySelectorAll('input[name="productos"]:checked').length > 0;

        if (!aceptoTerminos) {
            alert('Debes aceptar los términos y condiciones.');
            return false;
        }

        if (!productosSeleccionados) {
            alert('Debes seleccionar al menos un producto.');
            return false;
        }

        alert('Compra realizada con éxito!');
        return true;
    }
});

function resetPagina() {
    document.getElementById('ventaForm').reset();
    actualizarResumen();
}

document.addEventListener('DOMContentLoaded', function () {
    var seccionLateralFija = document.querySelector('.seccion-lateral-fija');
    var posicionInicial = seccionLateralFija.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;

        if (scrollY > posicionInicial) {
            seccionLateralFija.style.top = (scrollY - posicionInicial) + 'px';
        } else {
            seccionLateralFija.style.top = '20px';
        }
    });
});