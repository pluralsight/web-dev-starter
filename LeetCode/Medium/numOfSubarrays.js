// FAILED THE TLE TEST
// Look into descussion















// var numOfSubarrays = function(arr) {
//   const accArr = []
//   const sum = []
//     while(arr.length) {
//         _.reduce(arr, (acc, ea) => {
//           acc = acc.concat(ea)
//           console.log('acc', acc, 'ea', ea)
//           accArr.push(acc)
//           return acc
//         }, [])
//         arr.shift()
//       }
//       while (accArr.length) {
//         sum.push(accArr[0].reduce((a, b) => a + b))
//         accArr.shift()
//       }
//       return sum.filter(ea => ea % 2 === 1).length
//   };

  // var numOfSubarrays = function(arr) {
  //   debugger
  //   let counter = 0;
  //   const cache = {}
  //   while(arr.length) {
  //     _.reduce(arr, (acc, ea) => {
  //       var stringy = (acc.toString() + ea.toString())
  //       if( stringy in cache && cache[stringy] % 2 === 1){
  //         counter++
  //         return cache[stringy]
  //       } else {
  //       acc = acc + ea
  //       cache[stringy] = acc
  //       if((acc) % 2 === 1) {
  //         counter ++
  //       }
  //       return acc
  //     }
  //     }, 0)
  //     arr.shift()
  //   }
  //   return counter
  // }

  var numOfSubarrays = function(arr) {
    //debugger
    let counter = 0;
    while(arr.length) {
      _.reduce(arr, (acc, ea) => {
        acc = acc + ea
        if((acc) % 2 === 1) {
          counter ++
        }
        return acc

      }, 0)
      arr.shift()
    }
    return counter
  }
//console.log(numOfSubarrays([1, 3, 5]))
console.log(numOfSubarrays([12,2,12,46,42,20,45,63,24,35,79,27,44,45,81,85,92,36,85,73,37,91,99,59,82,60,32,36,39,56,82,97,45,10,2,35,57]))
//console.log(numOfSubarrays([70,67,65,49,36,78,13,11,13,42,69,86,54,35,69,21,24,92,48,82,73,80,34,91,37,16,79,25,51,85,15,14,60,41,12,7,14,19,3,68,34,37,95,64,100,35,29,41,81,8,65,79,67,81,7,72,83,64,71,97,8,17,39,22,55,17,17,43,5,89,95,68,95,100,89,13,11,82,1,22,100,3,5,99,41,63,24,14,84,40,39,56,31,22,48,2,31,39,45,38,90,63,94,56,21,100,94,42,19,25,92,68,70,56,79,80,9,55,83,99,10,79,36,55,57,61,58,52,39,86,78,42,6,48,96,4,17,30,75,58,8,31,25,11,21,76,70,45,23,95,35,56,30,68,74,58,2,27,22,18,41,57,5,94,96,44,44,24,25,60,37,44,16,56,35,52,60,13,63,81,45,55,49,74,37,67,96,59,32,13,20,44,5,94,49,23,82,86,78,100,93,39,45,11,57,72,77,38,45,16,14,67,23,58,97,29,50,83,8,50,10,14,71,6,58,99,91,24,56,61,83,20,20,72,72,60,31,65,31,70,62,53,26,29,91,57,78,22,81,22,88,32,98,60,70,12,36,59,73,79,42,34,71,76,29,74,45,90,68,96,8,57,70,99,3,9,62,33,92,33,32,85,43,92,85,17,10,58,62,17,36,31,57,55,19,68,10,40,41,1,7,56,79,94,34,66,80,52,5,67,11,90,18,59,56,84,25,37,16,69,14,87,13,78,53,1,59,15,20,99,20,30,23,9,50,3,10,32,89,45,54,12,27,92,58,58,59,73,29,10,92,79,19,5,14,16,64,35,15,83,36,7,76,88,93,18,36,15,36,16,43,78,57,98,93,82,2,54,27,32]))

// Input: arr = [1,3,5]
// Output: 4
// Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
// All sub-arrays sum are [1,4,9,3,8,5].
// Odd sums are [1,9,3,5] so the answer is 4.