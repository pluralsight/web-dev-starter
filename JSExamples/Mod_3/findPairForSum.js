// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

//given an array, find two numbers that sum up to another number in array
function magicSum(arr){
    accArr = [];
    for(let i = 0; i < arr.length; i++){  //seeker
      for(let j = 0; j < arr.length; j++){  //base
        if(i === j){
          break
        } else {
          let sum = arr[j] + arr[i]
          if(arr.indexOf(sum) !== -1){
            accArr.push(arr[i], arr[j])
            return accArr
          }
        }
      }
    }
    
    
  return accArr;
  }
  
  var array = [34, 88, 21, 75, 40, 13, 99]
  var result = magicSum(array)
  console.log(result)
  
  



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