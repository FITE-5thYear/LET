'use strict';

var express = require('express'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    winston = require('./winston'),
    path = require('path'),
    passport = require('./passport');

module.exports = function(app){
    winston.info('Initializing Express...');

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.set('view engine', 'jade');

    app.set('jsAssets', config.getJavaScriptAssetsGlobals())

    //use passport 
    app.use(passport.initialize());

    //setting static modules public folder
    config.getDirectories(config.rootPath + '/modules').forEach(function(pack){
        app.use('/' + pack, express.static(config.rootPath + '/modules/' + pack + '/public'));
    });
        
    app.use('/bower_components/', express.static(config.rootPath + '/bower_components'));
    app.use('/theme/', express.static(config.rootPath + '/theme'));

    config.getGlobbedFiles(['./modules/*/server/routes/routes.js', './modules/*/app.js']).forEach(function(routePath){
        require(path.resolve(routePath))(app);
    });

}