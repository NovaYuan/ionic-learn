'use strict';

var configRoutes;

configRoutes = function(app, server){
        app.get('/', function(request, response){
                response.redirect('/index.html')
        });

        app.all('/:obj_type/*?', function(request, response, next){
                response.contentType('json');
                next();
        });

        app.get('/:obj_type/list', function(request, response){
                response.send({
                        title: request.params.obj_type + 'list'
                })
        })
};

module.exports = {configRoutes: configRoutes};