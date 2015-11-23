'use strict';
var  http = require('http'),
        express = require('express'),
        routes = require('./routes.js'),
        bodyParser = require('body-parser'),
        path = require("path"),
        fs   = require("fs"),
        url  = require("url"),
        app = express(),
        server = http.createServer(app).listen(8080,"127.0.0.1");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use (function (req, res) {
        var proUrl = url.parse(req.url).pathname;
        var pathname = __dirname + proUrl;
        if (path.extname(pathname) == "") {

                pathname += "/";
        }
        if (pathname.charAt(pathname.length - 1) == "/") {
                pathname += "index.html";
        }
        fs.exists(pathname,function(exists){
                if(exists){
                        switch (path.extname(pathname)){
                                case ".html":
                                        res.writeHead(200,{"Content-Type":"text/html"});
                                        break;
                                case ".js":
                                        res.writeHead(200,{"Content-Type":"text/javascript"});
                                        break;
                                case ".css":
                                        res.writeHead(200, {"Content-Type": "text/css"});
                                        break;
                                case ".gif":
                                        res.writeHead(200, {"Content-Type": "image/gif"});
                                        break;
                                case ".jpg":
                                        res.writeHead(200, {"Content-Type": "image/jpeg"});
                                        break;
                                case ".png":
                                        res.writeHead(200, {"Content-Type": "image/png"});
                                        break;
                                default:
                                        res.writeHead(200, {"Content-Type": "application/octet-stream"});
                        }

                        fs.readFile(pathname, function(err,data){
                                res.end(data);
                        });
                }else{
                        res.writeHead(404,{
                                "Content-Type":"text/html"
                        });
                        res.end("<h1>404 Not Found</h1>");
                }
        });
});

//app.get('/', function(request, response){
//        response.redirect('/index.html')
//});
routes.configRoutes(app, server);

//app.get('/login', function(request, response){
//        response.redirect('/index.html')
//});