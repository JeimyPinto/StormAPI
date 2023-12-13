import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server escuchado en el puerto http://localhost:${PORT}`));

// servir archivos estaticos desde la carpeta assets cone xpress
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});
app.get('/login', (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + '/views/login.html');
});
app.get('/error404', (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + '/views/error404.html');
});
app.get('/home', (req, res) => {
    res.status(200);
    res.sendFile(process.cwd() + '/views/home.html');
});
app.post('/login', (req, res) => {
    let { email, pass } = req.body;
});
