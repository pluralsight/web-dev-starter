//---------------------------
/*
Given an array of mixed types, return true if there are more numbers than characters. 
Otherwise, return false.
*/

var input = [1, true, 6, 'h','k',7,'o',[], 9];
var output = hasMoreNums(input); 

function hasMoreNums(arr) {
  var nums = 0;
  var chars = 0;
  for (var i = 0; i < arr.length; i ++) {
    if (typeof arr[i] === 'number') {
      nums ++;
    } else {
      chars ++;
    }
  }
  return nums > chars;
}

console.log(output); // ==> true

//-------------------------------

//Given an aray of objects that have val and keep and/or erase properties as either true or false, return a new array of the values that should be kept.
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
  
var expected = [10, 9, 8];

function eraseOrKeep(arr) {
  var vals = [];
  for (var i =0; i < arr.length; i ++) {
    var obj = arr[i];
    if(obj.keep) {
     vals.push(obj.val);
    } else {
     vals.push(obj.val)
    }
  }
  return vals;
} 

var test = JSON.stringify(expected) === JSON.stringify(eraseOrKeep(input));
// console.log('result:', test)

//------------------------------

// Expendable Income
  //Create a function that returns how much expendable income will be left in your budget 
  //after paying all your bills. Expendable income is 20% of the remaining money after paying 
  //for everything. If there is no money left over, return 0. Return the amount as dollars.
//Example Function Invocations
var test1 = expendableIncome([
  {
    cost: "50",
    type: "water"
  },
  {
    cost: "30",
    type: "gas"
  },
  {
    cost: "100",
    type: "electricity"
  },
  {
    cost: "20",
    type: "recology"
  },
  {
    cost: "500",
    type: "rent"
  }], "2000") // ➞ "$260"
var test2 = expendableIncome([], "100") // ➞ "$20" 
var test3 = expendableIncome([
  {
    cost: "1000",
    type: "rent",
  },
  {
    cost: "200",
    type: "electricity"
  }
], "1000") // ➞ "$0"
//Debug the code below
function expendableIncome(bills, budget) {
  var total = 0;
  for (var i = 0; i < bills.length; i ++) {
    total += Number(bills.cost);
  }
  return "$" + (Number(budget) - total) * 0.2;
}

//---------------------------






























































//function movingPartition(a) {
//     if (a.length === 0) {
//         return [];
//     }
//     var len = a.length;
//     var part = [];
//     while (len > 0) {
//         if (a.length === len) {
//             part.push([[a.shift()], [a]]);
//         } else if (a.length === len - 1) {
//             part.push([[a.shift, a.shift], [a]]);
//         } else if (a.length === len - 3) {
//             part.push([])
//         }
//     }
// // }
// function movingPartition(arr){
//     const accArr = [];
//     const c = []
//     let i = 0;    
//     while(i < arr.length){
//       accArr.push([arr.slice(0,1), arr.slice(1)])
//       console.log(accArr)
//       arr.shift()
     
      
//     }
     
//   return accArr;
//   }
  

// //var result = movingPartition([-1, -1, -1, -1])
// //➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
// //console.log(result)
// var result = movingPartition([1, 2, 3, 4, 5])
// //➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// console.log(result)
// var result = movingPartition([])// ➞ []
// console.log(result)






/*
function bucketize (str, num){
    var bucket = '';
    str = str.split(' ')
    accArr = [];  
    /
    //split string, create bucket, create acc Array
    //iterate array
      //if bucket length plus word length is less than num
        //if bucket is not empty
          //concat an extra space
        //concat word to bucket
      //otherwise
        //push bucket to acc Array
        //set bucket to current word for next round
    //push final bucket into array
    //return acc Array
        
    for (let i = 0; i < str.length; i++){
      if(bucket.length + str[i].length < num){
        if (bucket.length !== 0){
          bucket += ' '
        } 
        bucket += str[i]
        
      } else {
        //if(bucket.length !== 0){
          accArr.push(bucket)
        //}
        bucket = str[i]      
      }
    }
  accArr.push(bucket)
  return accArr
  }



  var result = bucketize("she sells sea shells by the sea", 10)
  //➞ ["she sells", "sea shells", "by the sea"]
  console.log(result)
  
  var result = bucketize("the mouse jumped over the cheese", 7)
  //➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
  console.log(result)
  
  var result = bucketize("fairy dust coated the air", 20)
  //➞ ["fairy dust coated", "the air"]
  console.log(result)
  
  var result = bucketize("a b c d e", 2)
  //➞ ["a", "b", "c", "d", "e"]
  console.log(result)
    
*/












































































































// //removeElement eductional exercise - Remove all lucky 7s
// function removeElement (arr, target) {

//   var mySet = new Set()



//   var garbage = []
//   while(arr.indexOf(target) !== -1) {
//     var i = arr.indexOf(target);
//     garbage.push(arr.splice(i, 1)[0]);
//   }
// console.log(garbage)
// return arr;
// }



// console.log(removeElement([1, 3, 5, 7, 9, 7, 4, 2, 1, 7, 7, 5], 7))






// function fun (array) {
//   var accArr = [];

//   // while(array.length !== 0){
//   //   //accArr = accArr.concat(array.splice(array.length-1,1))


    
//   // }

//   for(let i = 0; i < array.length; i++){
//     //accArr.push(array.splice(0,1)[0])
//     accArr = accArr.concat(array.splice(array.length - 1,1))
//     i--
//   }
// return accArr;
// }

// console.log(fun([22, 23, 24, 25, 26]))



