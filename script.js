
//Given an aray of objects that have val and keep and/or erase properties as either true
// or false, return a new array of the values that should be kept.
/*
edge cases:
- contains both erase and keep that have opposite directions, => default to erase
- contains only erase as true or false 
- contains only keep as true or false
*/

var input = [
    {
      keep: false,
      erase: true,
      val: 5,
    },
    {
      keep: true,
      erase: false,
      val: 10
    },
    {
      keep: false,
      val: 3,
    },
    {
      erase: true,
      val: 7
    },
    {
      erase: false,
      val: 9
    },
    {
      keep: true,
      erase: true,
      val: 8
    },
  ];
  
var expected = [10, 9];

function eraseOrKeep(arr) {
  var vals = [];
  for (var i =0; i < arr.length; i ++) {
    var obj = arr[i];
    if(obj.keep !== undefined && obj.erase !== undefined) {
        if(obj.erase === false){
     vals.push(obj.val);
        }
    } else if (obj.erase === false){
        vals.push(obj.val)
    } else if (obj.keep === true) {    
        vals.push(obj.val)
    }
  }
  return vals;
} 

console.log(eraseOrKeep(input))


//var test = JSON.stringify(expected) === JSON.stringify(eraseOrKeep(input));
//console.log('result:', test)
