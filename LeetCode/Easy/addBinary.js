/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

//const a = "11"
//const b = "1"
//Output: "100"
//console.log(addBinary(a, b))

const a = "1010"
const b = "1011"
// Output: "10101"
console.log(addBinary(a, b))
