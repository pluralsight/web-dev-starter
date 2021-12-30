function solution (array) {
    var accArr = [];
    var start = 0;
    var next = 1;
    var end = 2;
   
  while (start < array.length){
    if(array[next] - array[start] === 1 && array[end] - array[next] === 1){
      while(array[end] - array[next] === 1){
        next = end;
        end = end + 1
      }
        accArr.push(`${array[start]}-${array[next]}`)
        start = end;
        next = end +1;
        end = end + 2;
  
    } else {
      accArr.push(array[start])
      start = next;
      next = end;
      end = end + 1;
    }
  }
  return accArr.join(',')
  }
  
  
  var result = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  console.log(result)
  // returns "-6,-3-1,3-5,7-11,14,15,17-20"
  
  solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
  // returns "-4--1,2,3,5,6,12-15,17"