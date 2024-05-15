// validations.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"][placeholder="Nombre usuario"]');
    const passwordInput = document.querySelector('input[type="password"][placeholder="Contraseña"]');
    const submitButton = document.querySelector('a[type="ingresar"]');

    function createErrorMessage(element, message) {
        let errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
            errorDiv.innerText = message;
        } else {
            errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.innerText = message;
            element.classList.add('is-invalid');
            element.parentNode.insertBefore(errorDiv, element.nextSibling);
        }
    }

    function removeErrorMessage(element) {
        element.classList.remove('is-invalid');
        let errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
            element.parentNode.removeChild(errorDiv);
        }
    }

    function validateForm(event) {
        event.preventDefault(); // Previene el envío del formulario

        let valid = true;

        // Validación del nombre de usuario
        if (usernameInput.value.trim() === "") {
            createErrorMessage(usernameInput, "El nombre de usuario es obligatorio");
            valid = false;
        } else {
            removeErrorMessage(usernameInput);
        }

        // Validación de la contraseña
        if (passwordInput.value.trim() === "") {
            createErrorMessage(passwordInput, "La contraseña es obligatoria");
            valid = false;
        } else {
            removeErrorMessage(passwordInput);
        }

        // Si todas las validaciones pasan, redirigir a la página de destino
        if (valid) {
            window.location.href = "index.html";
        }
    }

    // Asignar el evento click al botón de inicio de sesión
    submitButton.addEventListener('click', validateForm);
});
