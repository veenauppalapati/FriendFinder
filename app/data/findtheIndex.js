// var array = [ 0, 2, 4, 2];
// element = 2;
findTheIndex = function(array, element){
    var results = [];
    for ( i=0; i < array.length; i++ ){
        if ( array[i] == element ){
            results.push( i );
        }
    }    
    return results;
}
// findTheIndex(array, element)

module.exports.findTheIndex = findTheIndex;