const express = require("express");
const path = require("path");

const app = express();

// Servir archivos estáticos desde la carpeta node_modules
app.use("/static", express.static(path.join(__dirname, "node_modules")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor escuchado por: http://localhost:3000");
});
