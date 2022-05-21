
var hammingWeight = function(n) {
  n = n.toString(2)
  let counter = 0

  for ( let i = 0; i < n.length; i++ ) {
    if( n[i] === '1' ) {
      counter++
    }
  }
  return counter
};



n = '00000000000000000000000000001011'
console.log(hammingWeight(n))

/*
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.



Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.


Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
*/