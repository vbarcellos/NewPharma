const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const requireDir = require("require-dir");

// Inicia meu aplicativo
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Conecta ao meu DB
mongoose.connect("mongodb://172.17.0.2:27017/newpharmaapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Require em um diretorio inteiro em vez de um por um
requireDir("./src/backend");

// Rotas
app.use("/products", require("./src/backend/product/produto.routes"));
app.use("/material", require("./src/backend/material/material.routes"));
app.use("/order", require("./src/backend/order/order.routes"));

app.listen(3001);
