
// array of objects
module.exports = function(app){
var friends =[
    {   
        routeName: "ahmed",
        name:"Ahmed",
        photourl:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        questions:[
                    5,
                    1,
                    4,
                    4,
                    5,
                    1,
                    2,
                    5,
                    4,
                    1
        ]
    }   
]

//retreiving stored objects with person's data
app.post("/survey", function(req, res){
    var incomingPerson = req.body;
    incomingPerson.routeName = incomingPerson.name.replace(/\s+/g, "").toLowerCase();
    console.log(incomingPerson);
    // friends.push(person);
})


}

