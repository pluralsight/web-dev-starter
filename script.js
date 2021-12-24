


function solution (arr) {
  //i - array of linear numbers
  //o - string of numbers
    //any set of 3 or more consecutive numbers will be grouped
  
var accumulatorString = '';
var sum = 0;
var currentIndex = 0;

for (var i = 0; i < arr.length; i++) {
  var startIndex = arr[i]
  var currentIndex = arr[i]
  for (var j = arr.indexOf(arr[i])+1; j < (arr.length - arr.indexOf(arr[i])); j++){
    //console.log('currentIndex', currentIndex, 'arr[j]', arr[j])
    if(arr[j] - currentIndex === 1 ) {
      sum++
      currentIndex = arr[j]

    } 
    

  }
  if (sum >= 3){
    accumulatorString += `${startIndex} - ${currentIndex} ,`
    sum = 0;
  
} else {
  accumulatorString += `${startIndex} ,`
}
currentIndex = arr[j]
  

}

return accumulatorString;  

}





console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// returns "-4--1,2,3,5,6,12-15,17"