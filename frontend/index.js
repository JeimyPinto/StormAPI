import express from 'express';
import bodyParser from 'body-parser';
import appComponent from './Components/app.js'; 
app.listen(serverPort, () => console.log(`Server escuchado en el puerto http://localhost:${serverPort}`));

// servir archivos estaticos desde la carpeta assets cone express
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('app.js');
});
