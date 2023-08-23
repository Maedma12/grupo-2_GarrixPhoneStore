// Requerir los paquetes a usar
let express = require("express");
let path = require("path");
/* let methodOverride = require('method-override'); */

let app = express();
// Declarar los recursos estaticos (donde se encuentra Public)
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: false})); // Para poder interpretar lo que llega desde el body
app.use(express.json());  // Para poder interpretar lo que llega desde el body
/* app.use(methodOverride("_method")) */ // Para poder usar los métodos PUT y DELETE

//      Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

//              Routes
const mainRouter = require("./routes/main");
/* const productsRouter = require("./routes/products") */


// Poner a escuchar el servidor
app.listen(3000, () => console.log("Servidor Corriendo---- localhost:3000"))


// ----------- Manejo de Rutas ------------

app.use("/", mainRouter);
/* app.use("/products", productsRouter); */



/* app.get("/", (req, res) => {
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
}); */