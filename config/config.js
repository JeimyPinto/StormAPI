// Importa el módulo 'mysql'
const mysql = require('mysql');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'gps'
};

// Crea una conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Función para conectar a la base de datos
const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject(err);
            } else {
                console.log('Conexión exitosa a la base de datos');
                resolve();
            }
        });
    });
};

// Exporta la conexión y la función de conexión
module.exports = { connection, connectToDatabase };
