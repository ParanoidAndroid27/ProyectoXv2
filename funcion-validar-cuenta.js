document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var nom = document.getElementById("idnombre").value;
    var correo = document.getElementById("idcorreo").value;
    var contra = document.getElementById("idcontraseña").value;
    var mensaje = '';

    if (!nom) {
        mensaje = "El campo nombre debe ser ingresado";
    } else if (!correo || !validateEmail(correo)) {
        mensaje = "Debe ingresar un correo válido (Ejemplo: Correo123@gmail.com)";
    } else if (!contra || contra.length < 7) {
        mensaje = "El campo contraseña debe contener como mínimo 7 caracteres";
    } else {
        mensaje = "REGISTRO EXITOSO";
        alert(mensaje);
        window.location.href = "index.html";
        return;
    }

    alert(mensaje);
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
