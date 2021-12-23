// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:





function findPairForSum(arr, target){
    var accumulatorArray = []
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                accumulatorArray.push(arr[i], arr[j])
                return accumulatorArray;
            }
        }
    }

}











var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]