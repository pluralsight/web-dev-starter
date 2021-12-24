






















// function solution (arr) {
//   if(arr.length > 0 && arr.length < 3) {
//     return integers.join(', ')
//   }

//   //create a result array;
//   //create start index binding equal to 0
//   //create next index binding equal to 1
//   //create end index binding equal to 2


//   //iterate over the array
//     //if (end - next) is 1 AND (next - start) is 1  <-- initial check for 3 in a row
//       //we have a streak then
//       //while (end-next) is 1  <--how far does streak go?
//         //set next = end and end = end+1  <-- readjust for next round of checks
//       //save slice of array from start to end  <-- this is the end after while crawls down array
//       //create string of slice and concat to result 
//       //start, next, end =  end, end+1, end+2
//     //otherwise
//       //we do not have a streak
//       //add start to result
//       //start, next, end = next, end, end+1

//   //return result array joined on a comma
// }




//                            s   n   e
// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

// // solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// // // returns "-4--1,2,3,5,6,12-15,17"








































//
//FIRST TRY
//
// function solution (arr) {
//   //i - array of linear numbers
//   //o - string of numbers
//     //any set of 3 or more consecutive numbers will be grouped
  
// var accumulatorString = '';
// var sum = 0;
// var currentIndex = 0;

// for (var i = 0; i < arr.length; i++) {
//   var startIndex = arr[i]
//   var currentIndex = arr[i]
//   for (var j = arr.indexOf(arr[i])+1; j < (arr.length - arr.indexOf(arr[i])); j++){
//     //console.log('currentIndex', currentIndex, 'arr[j]', arr[j])
//     if(arr[j] - currentIndex === 1 ) {
//       sum++
//       currentIndex = arr[j]

//     } 
    

//   }
//   if (sum >= 3){
//     accumulatorString += `${startIndex} - ${currentIndex} ,`
//     sum = 0;
  
// } else {
//   accumulatorString += `${startIndex} ,`
// }
// currentIndex = arr[j]
  

// }

// return accumulatorString;  

// }