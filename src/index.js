/**
 * Created by Somebody on 8/6/2018.
 */
'use strict'

require('dotenv').config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var cors = require('cors');

var bodyParser = require('body-parser'); // parse the body request data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

var mainRoute = require('./router/main_route'); //importing route
mainRoute(app); //register the route

app.listen(port);



// TODO: let's create an api that is requesting data from another api and get it to my server.
//app.use(function(req,res,next){console.log("test22");next()});
