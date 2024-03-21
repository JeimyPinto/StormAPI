import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.disable('x-powered-by');

app.use((req, res, next) => {
    console.log('middeleware');
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log('Server listening on port http://localhost:' + PORT);
});
