import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server escuchado en el puerto http://localhost:${PORT}`));

//Middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//importar rutas
import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;