// FIRST ARRAY :[]
var firstArray = [2, 3, 4]
// SECOND ARRAY : [[],[]]
var secondArray = [[2, 4, 1], [1, 4, 5]]
// RESULTS ARRAY
var resultsArray = [];
var compatibilityArray = [];
var scores = 0;
var reduce = require('./adding.js');
console.log(reduce)

// ITERATE THROUGH SECOND ARRAY  
for (var i = 0; i < secondArray.length; i++) {
        console.log('FIRST LOOP')
//     RETURN  FIRST ARRAY
        // console.log(firstArray);
//     RETURN ELEMENTS IN SECOND ARRAY
        // console.log(secondArray[i]);
        console.log(`-------------------------------GOING INTO SECOND LOOP ${i+1}----------------------------------------`)
//     ONCE THE ELEMENTS ARE RETURNED FROM THE SECOND ARRAY, FOR EACH ELEMENT FOLLOW THE SET OF INSTRUCTIONS
        for (var j = 0; j < secondArray[i].length; j++) {
            console.log('SECOND LOOP')
//         RETURN ELEMENTS IN FIRST ARRAY
            // console.log("I'm logging elements in firstArray"  + '['+j+']' + ' ' + firstArray[j]);            
//         RETURN JELEMENTS OF EACH SECOND ARRAY ELEMENTS
            // console.log("I'm logging elements in secondArray"  + '['+i+']'+'['+j+']' + ' ' + secondArray[i][j]); 
//         SUBTRACT SECONDARRAY[I][J] FROM FIRST ARRAY [I]
            var results = firstArray[j] - secondArray[i][j]
            // console.log(`${firstArray[j]} -  ${secondArray[i][j]} = ` + results) ;
//         CONVERT RESULTS TO POSITIVE
            results = (Math.abs(results));
            // console.log ('After converted to positive, Im: ' + results)
           
            reduce.reduce(firstArray);
//         ADD RESULTS IN THE RESULTS ARRAY TO SCORES                        
        }
       
       
//     PUSH SCORES TO COMPATIBILITY ARRAY    
    
}  
