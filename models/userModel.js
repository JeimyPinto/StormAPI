    const conn = require('../config/config');
    const bcrypt = require('bcrypt');

    class UserModel {
        validateUser(email, pass, callback) {
            const query = 'SELECT * FROM usuario WHERE correo_electronico=$1';

            conn.query(query, [email], async (error, result) => {
                try {
                    if (error) {
                        throw error; // Lanzar el error al bloque catch
                    }

                    if (result.rows.length > 0) {
                        const storedHashedPassword = result.rows[0].contrasena;

                        // Comparar la contraseña proporcionada con la almacenada de forma segura
                        const passwordMatch = await bcrypt.compare(pass, storedHashedPassword);

                        // Usuario autenticado si las contraseñas coinciden
                        callback(null, passwordMatch);
                    } else {
                        // Usuario no encontrado
                        callback(null, false);
                    }
                } catch (error) {
                    // Manejar errores de la base de datos o de la comparación de contraseñas
                    console.error('Error al ejecutar la consulta:', error);
                    callback(error, null);
                } finally {
                    // Cerrar la conexión a la base de datos
                    conn.end();
                }
            });
        }
    }

    module.exports = UserModel;
