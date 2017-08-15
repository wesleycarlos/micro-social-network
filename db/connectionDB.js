module.exports = function(){
    const  mongoose = require('mongoose');
    mongoose.connect('mongodb://wesley:123456@ds119091.mlab.com:19091/cadastro-livros');
};