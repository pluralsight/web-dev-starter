
/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {


  string = string.split('')
  const result = []

  const obj = _.reduce(string, (acc, letter) => {
    acc[letter] = acc[letter] || 0
    acc[letter] += 1
    return acc
  }, {})

  let arr = []

  for ( let key in obj ) {
    arr.push({key, val : obj[key]})
  }

  arr.sort((a, b) => b.val - a.val)
  console.log("JSON =", JSON.stringify(obj))
  console.log("arr =", JSON.stringify(arr))

  let res = []
  for ( let i = 0; i < arr.length; i++ ) {
    res.push([arr[i].key, arr[i].val])
  }
console.log("res =", res)
    // for(let letter in obj) {
    //   result.push([letter, obj[letter]])
    //   delete obj[letter]
    // }

//return result;
};

characterFrequency('mississippi')