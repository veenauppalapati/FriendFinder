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
        friends.push(incomingPerson); 
        var incomingPersonQuestions = (incomingPerson.questions);
        var friendsQuestions = []
        friends.forEach(element => {
            friendsQuestions.push(element.questions);
        });
        console.log(friendsQuestions);
        res.json(incomingPerson);   
     
    });
    
};



    // compare these two arrays and find the difference for each element
    // push it to results array
    // add all the elements in the results array 
    // push it to compatibility array
    // find the lowest number 
    // pop that object with the lowest number
    


// exporting friends and function addingPerson to use it in server.js
module.exports.friends = friends;
module.exports.addingPerson = addingPerson;

