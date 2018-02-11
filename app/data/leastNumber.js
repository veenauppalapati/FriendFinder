//  var array = [ 2, 3, 1, 1];

// var number;
 // find the lowest number 
lowestNumber = function (array){
    // Grab the lowest number out of all in the array
     lowest = Math.min(...array);
    // console.log(lowest);

    // get the index of the lowest number
    var indexOfTheLowestNumber = array.indexOf(lowest);
    // console.log(indexOfTheLowestNumber);

    var findTheIndex = require('./findtheIndex');
    findTheIndex.findTheIndex(array, lowest);
}
// lowestNumber(array);

module.exports.lowestNumber = lowestNumber; 
   



