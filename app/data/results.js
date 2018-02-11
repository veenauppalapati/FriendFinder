results = function(firstArray, secondArray){
	var resultsArray = [];
	var addedResult;
	var compatibilityArray = [];
	var reduce = require('./adding.js');
	var lowestNumber = require('./leastNumber.js');
	var count;
	
	// getting the lngt of elements in each array so we can iterat through that many times
	for(var i = 0; i< secondArray.length; i++){
		for (var j = 0; j < secondArray[i].length; j++) {
			var count =  secondArray[i].length;
			break;
		}
		break;
	}

	for (var k = 0; k < secondArray.length; k++) {
		for (var l = 0; l < count; l++) {

			// compare the two arrays and find the difference for each element
			// convert the negative results to positive 	
			 // push it to results array	
			resultsArray.push(Math.abs(firstArray[l]- secondArray[k][l]));

			// calling the reduce function from the adding.js file
			addedResult = reduce.reduce(resultsArray);
		}
		// emptying the resultsArray before it iterates throught again
		resultsArray = [];
		// push the addedResult to  compatibility array for final call on the smallest number
		compatibilityArray.push(addedResult);
	}

	//calling the lowestNumber function from the leastNumber.js file
	var smallestNumber = lowestNumber.lowestNumber(compatibilityArray);
	return smallestNumber;

}


module.exports.results = results;
