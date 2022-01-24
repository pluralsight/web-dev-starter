function outer () {
  let counter = 0;

  function incrementCounter () {
    counter ++
  }
  return incrementCounter
}

cons myNewFunction = outer();

myNewFunction();

myNewFunction();

















































































function joinArrays(...arr) { //arr1, arr2) {
  // your code here
  console.log(arr)
  var sliced = Array.prototype.slice.call(arguments, 0);

  return sliced.flat()
}
//var output = joinArrays([1, 2], [3, 4]);
//console.log(output); // --> [1, 2, 3, 4]




function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
   var accLength = 0;
//   for (let i = 0; i < arguments.length; i++) {
//       accLength += arguments[i].length
//   }
//   return accLength
// }
var slicedArgs = Array.prototype.slice.call(arguments, 0);

slicedArgs.forEach(function(ele){
    accLength += ele.length
});
return accLength;
}
//var result2 = getLengthOfThreeWords('one', 'two', 'threee')
//console.log(result2)




















/*

var testFun = function(){
  accArr = []

  _.each(arguments, function(el) {
    _.each(el, function(ele){
      console.log(el, ele)
      if(ele || ele === 0){
        accArr.push(ele)
      }
    })
  })
  return accArr
}


var result = testFun([1, 2, 3, 'string', true, undefined, null,'', 0 , 10])
console.log(result)

_.extend = function(obj) {

  var sliced = Array.prototype.slice.call(arguments);
  for (var i = 1; i < sliced.length; i++) {
    for (var key in sliced[i]) {
      obj[key] = sliced[i][key];
    }
  }
  return obj;
};


_.extend = function(obj) {
  _.each(arguments, function(el){
    _.each(el, function(ele, ind){
      console.log(el, ele, ind)
      obj[ind] = ele
    })
  })
  return obj
}

var result = _.extend({a:1}, {b:1}, {}, {b:2})
console.log(result)
*/