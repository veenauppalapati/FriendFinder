// the array I 'm working with for the purpose of testing
var myArray = [ 2, 1, 5];
lowestNumber = function (array){
    // Grab the lowest number out of all in the array
    var lowest = Math.min(...array);
    console.log(lowest);

    // get the index of the lowest number
    var indexOfTheLowestNumber = array.indexOf(lowest);
    console.log(indexOfTheLowestNumber);
}
lowestNumber(myArray);

module.exports.lowestNumber = lowestNumber; 
   



