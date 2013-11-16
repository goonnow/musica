module.exports = function(app){

    //home route
    var home = require('../app/controllers/home');
    app.get('/', home.index);
    app.get('/view/:songIndex', home.view);
    app.get('/search', home.search);

};
