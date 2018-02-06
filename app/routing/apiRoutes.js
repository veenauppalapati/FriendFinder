//PARAMETERIZATION
module.exports = function(app, path){
//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends/:whoDoIWantToSee?", function(req, res){
    var chosen = req.params.whoDoIWantToSee;
    // console.log(chosen);
});
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
}
