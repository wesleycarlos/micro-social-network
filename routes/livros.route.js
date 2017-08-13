module.exports = function (app) {
    const livroModel = require("../models/livro.model");


    app.get("/livros", function (req, res) {
        livroModel.find(function (error, response) {
            if (error) {
                res.json(error);
            }
            res.json(response);
        });
    });

    app.post("/cadastrar-livro", function (req, res) {
        const livroModelo = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            numPaginas: req.body.numPaginas,
            anoLanca: req.body.anoLanca
        }

        const livroExec = new livroModel(livroModelo);
        livroExec.save(function (error, response) {
            if (error) {
                res.json(error);
            }
            res.json(response);
        });


    });

    app.delete("/delete-livro/:autor", function(req, res){
        livroModel.deleteMany({autor: req.params.autor}, function(error, response){
            if (error){
                res.json(error);
            }
            res.json(response);
        })
    })
};



