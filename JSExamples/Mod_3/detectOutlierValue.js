/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.
*/

function detectOutlierValue (str){
    var index;
    var oddNums = []
    var evenNums = []
    var arr = []
    numArr = []

arr = str.split(' ');
for(var i = 0; i < arr.length; i++){
    numArr.push(parseInt(arr[i]))
    if(parseInt(arr[i]) % 2 === 0){
        evenNums.push(parseInt(arr[i]))
    } else {
        oddNums.push(parseInt(arr[i]))
    }
}

if(oddNums.length > evenNums.length){
    index = numArr.indexOf(evenNums[0])
    return index + 1
} else {
    index = numArr.indexOf(oddNums[0])
    return index + 1
}

}

console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd

//create an array of "strings" from the str
//look through each array number using parseInt and sort odd and even
//push number into accumulator variable
//shorter length array is outlier
//using index of and value of outlier
//locate outlier in original string
