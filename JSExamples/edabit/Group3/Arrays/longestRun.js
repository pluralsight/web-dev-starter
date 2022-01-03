function longestRun (arr){
    arr.sort((a,b) => a-b)
    arr = [...new Set(arr)]
    console.log(arr)
    var sortArr = [];
    
    var start = 0;
    var next = 1;
    var end = 2;
    
    while (start < arr.length){ 
      if (arr[next] - arr[start] === 1 ){
        console.log('start', arr[start], 'next', arr[next], 'end', arr[end])
        while (arr[end] - arr[next] === 1) {    
          next = end;
          end = end + 1;
        }
        sortArr.push(arr.slice(start,end));
        start = end;
        next = end + 1;
        end = end + 2;
      } else {
      sortArr.push(arr.slice(start, next))
      start = next;
      next = end;
      end = end + 1;
      }
    }  
    console.log(sortArr)  
    return (longestArray(sortArr))
  }
  
  function longestArray(arr) {
    var longestRun = 0  
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestRun){
        longestRun = arr[i].length
      }
    }
  return longestRun
  }
  
  console.log(longestRun([1, 2, 6, 7, 8, 9, 10]))// ➞ 3
  // Longest consecutive-run: [1, 2, 3], [6, 7, 8, 9, 10]
  
  console.log(longestRun([5, 4, 2, 1]))// ➞ 2
  // Longest consecutive-run: [5, 4] and [2, 1].
  
  console.log(longestRun([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 7, 10, 15]))// ➞ 1
  // No consecutive runs, so we return 1.
  
  console.log(longestRun([ 1, 1, 2, 2, 3 ]))