
reduce = function(array){

var a;
var b;
var c;

for (var k = 0; k< array.length; k++){

    for (var i = 0; i < array.length; i++){
        a = array[i]; 
        console.log(a);
       break;    
    }
  
    for(var j = 1; j<array.length; j++){
        b = array[j]; 
        console.log(b);
      break;
    }
    c= a+b;

    array[1] = c; 

    b = array[j+1]

    c = c + b;
   console.log(c);
   break;
  
}

}

// the array I 'm working with for the purpose of testing
lowestNumber = function (array){
    // Grab the lowest number out of all in the array
    var lowest = Math.min(...array);
    console.log(lowest);

    // get the index of the lowest number
    var indexOfTheLowestNumber = array.indexOf(lowest);
    console.log(indexOfTheLowestNumber);
}
lowestNumber(myArray);


module.exports.reduce = reduce; 
module.exports.lowestNumber = lowestNumber; 


