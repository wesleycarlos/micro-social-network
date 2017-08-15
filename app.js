const express = require('express');
const app = express();
const portApp = 3000;

const serverConfig = require("./config/server.config")(app);

const indexRoute = require("./routes/index.route")(app);
const livrosRoute = require("./routes/livros.route")(app);

app.listen(portApp, function(){
    console.log(`Servidor rodando na porta ${portApp}`);
});

module.exports = app;