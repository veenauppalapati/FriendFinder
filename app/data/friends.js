
// array of objects
const friends = [
    {   
        routeName: "ahmed",
        name:"ahmed",
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
    },
    {   
        routeName: "veena",
        name:"veena",
        photourl:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        questions:[
                    2,
                    3,
                    4,
                    2,
                    5,
                    5,
                    4,
                    3,
                    4,
                    1
        ]
    }   
     
];

var addingPerson = function(app, incomingPerson){
    //retreiving stored objects with person's data
    app.post("/survey", function(req, res){
        var incomingPerson = req.body;
        incomingPerson.routeName = incomingPerson.name.replace(/\s+/g, "").toLowerCase();
        incomingPerson.questions = incomingPerson['questions[]'];
        delete incomingPerson['questions[]'];
        var incomingPersonQuestions = (incomingPerson.questions);

        var friendsQuestions = [];
        // push the arrays into one array to use friendsQuestions array to compare it with the incomingpersonquestions Array.
        friends.forEach(element => {
            friendsQuestions.push(element.questions);
        });
        console.log(friendsQuestions);
        
        // compare these two arrays and find the difference for each element
        var results = require('./results.js');
        results.results(incomingPersonQuestions, friendsQuestions);
        
        friends.push(incomingPerson); 
        console.log(friends);
        res.json(incomingPerson);

    });
    
};
// exporting friends and function addingPerson to use it in server.js
module.exports.friends = friends;
module.exports.addingPerson = addingPerson;

