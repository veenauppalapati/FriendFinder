//ROUTING
//Incorporate dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friendsModule = require('../data/friends.js');
var friends = friendsModule.friends;
console.log(friends);
//call express
var app = express();
// Declare a port
var PORT = 3000;

//data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname+"/../public/", "survey.html"));
});
// A default, catch-all route that leads to `home.html` which displays the home page. 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+"/../public/", "home.html"));
});

app.post("/survey", function(req, res){
    var newPerson = req.body;
    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newPerson);
    friends.push(newPerson);
})
//Listen to port
app.listen(PORT, ()=>{
    console.log('listening to PORT: '+ PORT);
});