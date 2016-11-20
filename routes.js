// Local dependencies
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home page
        app.get('/', controllers.Home.index);

        // Projects page
        app.get('/projects', controllers.Projects.index);

         // Experience page
        app.get('/experience', controllers.Experience.index);

    }

};

module.exports = Router;
