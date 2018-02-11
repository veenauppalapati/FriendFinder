
var findAMatch = function (firstArray, secondArray) {
    var finalResultsArray = [];
    secondArray.forEach(secondArrayElements => {
        var temp = [];
        for (i in secondArrayElements) {
            for (j in firstArray) {
                if (i == j) {
                    temp.push(Math.abs(firstArray[j] - secondArrayElements[i]));
                }
            }
        }
        // sum temp element, and add to finalResultsArray
        finalResultsArray.push(temp.reduce((a, b) => a + b, 0));
    });
    return finalResultsArray;
}
//console.log(findAMatch(firstArray, secondArray));
////=====================
var getIndexOfSmallestInArray = function(){
    Array.min = function (array) {
    return Math.min.apply(Math, array);
}
 var r = findAMatch(a,b);
var minimum = Array.min(findAMatch(a,b));
return r.indexOf(minimum);
}

console.log(getIndexOfSmallestInArray());
//console.log(`The index of the smallest number in the array is '${r.indexOf(minimum)}'`);

module.exports.findAMatch = findAMatch;
module.exports.getIndexOfSmallestInArray = getIndexOfSmallestInArray