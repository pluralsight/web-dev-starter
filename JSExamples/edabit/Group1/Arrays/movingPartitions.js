const movingPartition = arr =>
  arr.slice(1).map((_, i) => [arr.slice(0, i + 1), arr.slice(i + 1)]);





function movingPartition(arr){
    var accArr = [];
    
    for(let i = 1; i < arr.length ; i++){
      accArr.push([arr.slice(0,i), arr.slice(i)])
    }
    
  return accArr
  }
  
  var result = movingPartition([-1, -1, -1, -1])
  //➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
  console.log(result)
  var result = movingPartition([1, 2, 3, 4, 5])
  //➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]
  
  console.log(result)
  var result = movingPartition([])// ➞ []
  console.log(result)

  /*
[[[-1],[-1,-1,-1]],[[-1,-1],[-1,-1]],[[-1,-1,-1],[-1]]]  

[[[1],[2,3,4,5]],[[1,2],[3,4,5]],[[1,2,3],[4,5]],[[1,2,3,4],[5]]]  

[]  
  */