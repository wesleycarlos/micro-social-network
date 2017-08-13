const express = require('express');
const app = express();
const portApp = 4000;

const serverConfig = require("./config/server.config")();

const indexRoute = require("./routes/index.route")();
const livrosRoute = require("./routes/livros.route")();

app.listen(portApp, function(){
    console.log(`Servidor rodando na porta ${portApp}`);
});