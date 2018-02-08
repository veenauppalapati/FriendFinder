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

var a = [2, 3, 5];
var b = [[3, 2, 1], [2, 4, 5], [4, 3, 1]];
//[1,1,4]
function findAMatch(firstArray, secondArray) {
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
console.log(findAMatch(a, b));

