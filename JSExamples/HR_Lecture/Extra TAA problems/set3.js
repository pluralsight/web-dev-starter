// JS Interpreter Evaluation

// 1)
//Examine the following variables.
var obj = {key: true, lock: false};
var key = 'lock';

//BEFORE using console.log to test them, write down what you think are the values of access1, access2, and access3.
var access1 = obj[key];//Your answer: __
var access2 = obj['key'];//Your answer: __
var access3 = obj.key;//Your answer: __
//After logging, did they match your expectations?
//Why or why not?
// console.log(access1)
// console.log(access2)
// console.log(access3)
//-----------------------------------------------
//2a)
var array1 = [0, 1, 2, 3, 4]
for (var k = 0; k < array1.length; k++) {
}
//After executing, what is the current value of k?
//console.log(k);
//Why?

//2b)
for (var i = 0; i < array1.length; i++) {
  if (i !== array1.length - 1) {
    continue;
  } else {
    break;
  }
}

//After executing, what is the current value of i?
//console.log(i);
//Why?

//-----------------------------------------
//3)
//Examine the following functions.
function loop(str) {
  var result = '';
  for (var i = 0; i < 3; i++) {
    result += i;
  }
  return result;
}


function nestedLoop(str) {
  var result = '';
  for (var i = 0; i < 3; i++) {
    result += i;
    for(var j = 0; j < str.length; j++) {
      result += str[j];
    }
  }
  return result;
}
var loopOutput1 = loop('abc');
var loopOutput2 = nestedLoop('abc');
//BEFORE using console.log to test them, write down what you think are the values of loopOutput1 and loopOutput2.
//Did they match your expectations? Why or why not?
//console.log(loopOutput2)


var loopyloop = '';
j = 4;
for (var i = 1; i < j; i += 0){
  loopyloop += 'hello 3';
  j--;
};
//After executing, what will be the values of variables loopyloop, i, and j?
// console.log(loopyloop);
// console.log(i, j);

var string1 = 'word';
var string2 = ''

var loopy = '';
for (var x = 0; string2 !== 'word'; x++) {
  loopy += string1[x];
  string2 += string1[x];
}

//After executing, what is the value of loopy?
//console.log(loopy);



//-------------------------------------------
// 4)

//The following function will be given a string and an array of numbers.

var foo = function(string, numsArr) {
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr[numsArr[i]] = string[i];
  }
  return arr.join('');
};
//What value type is being returned?

//What are the values of fooOutput1 and fooOutput2?
var fooOutput1 = foo('ckah', [2,3,1,0]);
var fooOutput2 = foo('avelazing', [1,3,9,2,5,8,7,6,0]);
//console.log(fooOutput2)


//------------------------------------------
// 5)
//The following function is given an array of numbers.

var bar = function(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
      var count = 0;
      for (var j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++
        }
      }
      arr.push(count);
    }
  return arr;
};

//What is the value of barOutput?
var barOutput = bar([8,1,2,2,3]);
//console.log(barOutput)
//-----------------------------------------
// 6)

var animalSanctuary = ['apple', 'banana', 'calamari'];
var dinnerPlate = {a: 'aardvark', b: 'bat', c: 'cat'};

var foobar = function(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = obj[arr[i][0]];
  }
  return arr;
}

//BEFORE using console.log to test, can you predict the value of animalOutput?
//What value type will it be?
var animalOutput = foobar(animalSanctuary, dinnerPlate);
console.log(animalOutput)



//--------------------------------------------
