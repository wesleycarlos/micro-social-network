const connection = require("../db/connectionDB")();
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const livroModel = new Schema(
    {
        titulo: String, 
        autor: String,
        numPaginas: Number,
        anoLanca: Number
    }
)

const Livro = mongoose.model("livroModel", livroModel);

module.exports = Livro;

