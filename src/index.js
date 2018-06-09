/**
 * Created by Somebody on 8/6/2018.
 */
'use strict'

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var cors = require('cors');

var bodyParser = require('body-parser'); // parse the body request data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

var routes = require('./router/main_route'); //importing route
routes(app); //register the route

app.listen(port);



app.use(function(req,res,next){console.log("test22");next()});
