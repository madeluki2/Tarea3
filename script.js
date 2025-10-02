document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    let fullName = document.getElementById('fullName').value;
    let cedula = document.getElementById('cedula').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let email = document.getElementById('email').value;
    let genero = document.getElementById('genero').value;

    // Variable para el mensaje de error o éxito
    let message = '';

    // Validación de los campos
    if (fullName === '' || cedula === '' || telefono === '' || direccion === '' || email === '' || genero === '') {
        message = 'Por favor, completa todos los campos.';
    } else if (!/^[0-9]{10}$/.test(telefono)) {
        message = 'El número de teléfono debe tener 10 dígitos.';
    } else if (!/^[0-9]{5,12}$/.test(cedula)) {
        message = 'La cédula debe tener entre 5 y 12 dígitos.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        message = 'Por favor ingresa un correo electrónico válido.';
    } else {
        message = 'Formulario enviado con éxito!';
        // Aquí puedes enviar el formulario mediante AJAX o algún otro método si es necesario
    }

    // Mostrar el mensaje de validación
    document.getElementById('message').innerText = message;
});
