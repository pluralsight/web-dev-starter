//  MORE ADVANCED PRACTICE (1) : COMMA SEPARATED INTEGERS

function solution (arr) {
  if(arr.length > 0 && arr.length < 3) {
    return arr.join(', ')
  }

  //create a result array;
  let accumulatorArray = [];
  //create start index binding equal to 0
  //create next index binding equal to 1
  //create end index binding equal to 2
  let start = 0;
  let next = 1; 
  let end = 2;


  //iterate over the array
  while (start < arr.length) {
    //if (end - next) is 1 AND (next - start) is 1  <-- initial check for 3 in a row
    if (arr[end] - arr[next] === 1 && arr[next] - arr[start] === 1) {
      //we have a streak then
      //while (end-next) is 1  <--how far does streak go?
      while (arr[end] - arr[next] === 1){
        //set next = end and end = end+1  <-- readjust for next round of checks
        next = end;
        end = end+1
      }
      //save slice of array from start to end  <-- this is the end after while crawls down array
      let arrSlice = arr.slice(start, end);
      //create string of slice and push to result 
      accumulatorArray.push(`${arrSlice[0]}-${arrSlice[arrSlice.length-1]}`)
      //start, next, end =  end, end+1, end+2
      start = arr[end];
      next = arr[end+1];
      end = arr[end+2];
    } else {
    //otherwise
      //we do not have a streak
      //add start to result
      accumulatorArray.push(arr[start]);
      //start, next, end = next, end, end+1
      start = next;
      next = end;
      end = end+1;
    }
  }
  //return result array joined on a comma
  return accumulatorArray.join(', ');
}





console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

// solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// // returns "-4--1,2,3,5,6,12-15,17"








































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