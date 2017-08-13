module.exports = function(app){
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: false}))
};