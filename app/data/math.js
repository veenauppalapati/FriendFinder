var a = [ 2, 3, 5];
var b = [ [1, 4, 5], [2, 3, 5], [4, 3, 1]];

// first Array has one element questions
// second Array has array of multiple elements questions array.  arrays inside of an array
function findAMatch (firstArray, secondArray) {
    //iterate through array b 
    // b.forEach(element => {
        
    // });
    // 
    // compare each index's elements with array firstArray elements
    var tempArray = [];

    for (var i = 0; i< secondArray.length; i++){
        tempArray.push(firstArray[i]   -   secondArray[0][i]);
    }
    console.log(tempArray);
    // b.forEach((element, index)=> {
    //     console.log(element[element[index]]);
    // // find the difference for each element's index 
    
    // // push the difference to a results array
    // });
   
    // add the elements in the results array
    // push the added results into a compatiblity array
    // look for the lowest number in the compatibility array
    // based on the number from the compatibility array, use it as an index to find the obect in friends array

}
findAMatch(a,b);