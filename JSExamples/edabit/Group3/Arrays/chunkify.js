function chunkify (arr, num){ 
    accArr = [];  
    for (let i = 0; i < arr.length; i+=num){
      accArr.push(arr.slice(i, i + num))
    }
  return accArr  
  }
  
  
  
  console.log(chunkify([2, 3, 4, 5], 2))// ➞ [[2, 3], [4, 5]]
  
  console.log(chunkify([2, 3, 4, 5, 6], 2))// ➞ [[2, 3], [4, 5], [6]]
  
  console.log(chunkify([2, 3, 4, 5, 6, 7], 3))// ➞ [[2, 3, 4], [5, 6, 7]]
  
  console.log(chunkify([2, 3, 4, 5, 6, 7], 1))// ➞ [[2], [3], [4], [5], [6], [7]]
  
  console.log(chunkify([2, 3, 4, 5, 6, 7], 7))// ➞ [[2, 3, 4, 5, 6, 7]]