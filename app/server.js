//Incorporate dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//call express
var app = express();
// Declare a port
var PORT = 3000;

//data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Listen to port
app.listen(PORT, ()=>{
    console.log('listening to PORT: '+ PORT);
});