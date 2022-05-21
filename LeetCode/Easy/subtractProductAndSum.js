var subtractProductAndSum = function(n) {
  n = n.toString()
  let sum = 0;
  let prod = 1;

  for ( let i = 0; i < n.length; i++ ) {
    sum += +n[i]
    prod *= +n[i]
  }
   return prod - sum
};

let n=234
console.log(subtractProductAndSum(n))

/*

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15

*/