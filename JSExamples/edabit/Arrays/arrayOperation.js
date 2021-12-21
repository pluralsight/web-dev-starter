/*
Array Operation

Create a function that takes three parameters where:

    x is the start of the range (inclusive).
    y is the end of the range (inclusive).
    n is the divisor to be checked against.

Return an ordered array with numbers in the range that are divisible by the third parameter n. 
Return an empty array if there are no numbers that are divisible by n.
Examples

arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ []
*/

function arrayOperation(x, y, n) {

    collectorArray = [];
    num = 0;
    for(var i = 0; i < y; i++) {
        if(num > x && num < y){
            collectorArray.push(num);
            num += n;
        } else {
            num += n
        }

    }
    return collectorArray;
	
}

var parameter1 = 0
var parameter2 = 20
var parameter3 = 2
console.log(arrayOperation(parameter1, parameter2, parameter3))

//[2, 4, 6, 8, 10, 12, 14, 16, 18]