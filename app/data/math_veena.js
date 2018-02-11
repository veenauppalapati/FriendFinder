// FIRST ARRAY :[]
var firstArray = [2, 3, 4]
var secondArray = [  [2, 4, 1], [1, 4, 5], [2,4,5], [2,4,5]   ];

results = function(firstArray, secondArray){
	var resultsArray = [];
	var addedResult;
	var compatibilityArray = [];
	var reduce = require('./adding.js');
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
	console.log(compatibilityArray);
}

module.exports.results = results;
