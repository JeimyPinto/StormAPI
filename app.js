const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//Importar los controladores
const userController = require('./controllers/userController');

const PORT = process.env.PORT || 3000;

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/login', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/error404', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'views', 'error404.html'));
});
app.get('/home', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.post('/login', (req, res) => {
  let { email, pass } = req.body;

  // Define el callback para manejar la respuesta del controlador
  const callback = (error, result) => {
    if (error) {
      // Manejar el error
      console.error('Error en la autenticación:', error);
      res.status(500).json({ error: 'Error en la autenticación' });
    } else {
      if (result) {
        // Usuario autenticado correctamente
        console.log('Usuario autenticado correctamente.');

        // Redirige a /home
        res.redirect('/home');
      } else {
        // Usuario no autenticado
        console.log('Usuario no autenticado. Correo o contraseña incorrectos.');
        res.status(401).json({ error: 'Usuario no autenticado. Correo o contraseña incorrectos' });
      }
    }
  };
  // Llama al método login del controlador pasando los parámetros y el callback
  userController.login(email, pass, callback);
});

// Ruta para manejar todas las rutas no existentes y redirigirlas a /error404
app.use((req, res) => {
  res.redirect('/error404');
});

app.listen(PORT, () => {
  console.log(`Server escuchado en el puerto http://localhost:${PORT}`);
});
