//Incorporate dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// console.log(htmlRoutes);
//call express
var app = express();
//requiring htmlRoute.js
require('../app/routing/htmlRoutes.js')(app, path);
//requiring apiRoutes.js
require('../app/routing/apiRoutes.js')(app);

// Declare a port
var PORT = 3000;

//data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//requiring the friends.js
const friends = require('../app/data/friends.js');
console.log(friends.addingPerson(app));
console.log(friends.friends);
// const friends = require('../app/data/friends.js').friends;



//Listen to port
app.listen(PORT, ()=>{
    console.log('listening to PORT: '+ PORT);
});
