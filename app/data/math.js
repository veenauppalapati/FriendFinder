// var a = [ 2, 3, 5];
// var b = [ [1, 4, 5],[2, 3, 3] ];
// //Expected results [2,0,6]
// // first Array has one element questions
// // second Array has array of multiple elements questions array.  arrays inside of an array
// function findAMatch (firstArray, b) {
//  var x =   function(){
//     for (let t = 0; t < firstArray.length; t++) {
//         var elementfirstArray = firstArray[t];
//        console.log(elementfirstArray); 
//     }
// var i = 0;
//     while(i<b.length){
//         var elementI = (b[i]);
//         //return elementI;
//         console.log('hello')
       
//         elementI.forEach(element => {
//             console.log('hi')
//             //console.log(elementfirstArray);
//             // console.log(element+2);
//             console.log(element);
//             // console.log(elementfirstArray);
//             // console.log(element);
//             // console.log(elementfirstArray - element);
//             // console.log(`${elementfirstArray} and ${elementI[element]}`);
//         });
        
//        i++; 
//     }

//  } 
// x();
  
// }
// findAMatch(a,b);

//[(2-3) + (3-2) + 5-1 = 1+1+4 = 6
// (2-2) + (3-4) + (5-5) + 0+1+0 = 1
// (2-4) + (3-3) + (5-4)  =2+0+4 =6

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