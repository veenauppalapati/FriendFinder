 // add all the elements in the results array 
reduce = function(array){
var a;
var b;
var c;
a = array[0];
b = array[1];
c = a+b;
	for(var i = 1; i<array.length-1; i++){
		b = array[i+1];
		c = c + b;
	}
	return c;
}

module.exports.reduce = reduce; 



