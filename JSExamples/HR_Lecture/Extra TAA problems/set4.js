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

