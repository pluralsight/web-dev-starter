/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
   arr.sort((a, b) => a - b)
   console.log('arr =', arr)

   const accArr = []
   for ( let i = 0; i < arr.length; i++ ) {
     console.log(arr[i], arr[i].toString(2))
     let bits = arr[i].toString(2).split('').reduce((a, b) => +a + +b)
     console.log('bits =', bits)
     //push into object with key matching bits
     if ( !accArr[bits] ) {
       accArr[bits] = []
     }
     accArr[bits].push(arr[i])
   }
return accArr.flat()
};

arr = [8, 7, 6, 5, 4, 3, 2, 1]
//[0,1,2,4,8,3,5,6,7]
console.log(sortByBits(arr))


module.exports = sortByBits
/*


*/