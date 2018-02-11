
results = function(firstArray, secondArray){
	var resultsArray = [];
	var addedResult;
	var compatibilityArray = [];
	var reduce = require('./adding.js');
	var lowestNumber = require('./leastNumber.js');
	var count;
	for(var i = 0; i< secondArray.length; i++){
		for (var j = 0; j < secondArray[i].length; j++) {
			var count =  secondArray[i].length;
			break;
		}
		break;
	}

	for (var k = 0; k < secondArray.length; k++) {
		for (var l = 0; l < count; l++) {		
			resultsArray.push(Math.abs(firstArray[l]- secondArray[k][l]));
			addedResult = reduce.reduce(resultsArray);
		}
		resultsArray = [];
		compatibilityArray.push(addedResult);
	}
	// console.log(compatibilityArray);
	lowestNumber.lowestNumber(compatibilityArray);

}
results(firstArray, secondArray);

module.exports.results = results;
