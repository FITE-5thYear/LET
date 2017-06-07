'use strict';

var express = require('express'),
    config = require('./config/config'),
    winston = require('./config/winston'),
    sequelize = require('./config/sequelize');

createApp();

function createApp(){

    sequelize.init(function(){
        
        var app = express();
        require('./config/express')(app);


        app.listen(config.port);
        winston.info("App started and running on port: " + config.port);
        
    });    
}