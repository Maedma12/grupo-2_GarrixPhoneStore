// Requerir los paquetes a usar
let express = require("express");
let app = express();

let path = require("path");

// Declarar los recursos estaticos (donde se encuentra Public)
app.use(express.static("public"))

// Poner a escuchar el servidor
app.listen(3000, () => console.log("Servidor Corriendo---- localhost:3000"))

// ----------- Manejo de Rutas ------------

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});