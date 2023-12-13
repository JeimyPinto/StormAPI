const userModel = require('../models/userModel');

class UserController {
    login(email, pass) {
        // Define el callback para manejar la respuesta de validateUser
        const callback = (error, result) => {
            if (error) {
                // Manejar el error
                console.error('Error en la autenticación:', error);
            } else {
                if (result) {
                    // Usuario autenticado correctamente
                    console.log('Usuario autenticado correctamente.');
                } else {
                    // Usuario no autenticado
                    console.log('Usuario no autenticado. Correo o contraseña incorrectos.');
                }
            }
        };

        // Llama a validateUser del modelo pasando los parámetros y el callback
        userModel.validateUser(email, pass, callback);
    }
}

module.exports = new UserController();
