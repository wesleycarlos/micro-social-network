module.exports = function(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/api_livros');
};