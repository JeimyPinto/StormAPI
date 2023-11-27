const express = require("express");

const app = express();
app.listen(3000, () => {
  console.log('Servidor escuchado por: http://localhost:3000');
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
