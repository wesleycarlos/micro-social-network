const express = require('express');
const app = express();
const portApp = 4000;


app.listen(portApp, function(){
    console.log(`Servidor rodando na porta ${portApp}`);
});