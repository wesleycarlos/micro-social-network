module.exports = function(){
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/api_livros');
};