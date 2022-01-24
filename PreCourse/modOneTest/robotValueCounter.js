var x13 = {
  name: 'x13',
  canFly: true,
  canCook: false,
  yearsInspected: [2002, 2005, 2010],
  fueledBy: "cookies",
  bestFriend: {
    name: "z09",
    yearsKnown: 4,
    isCharging: true
  }
};

var z09 = {
  name: 'z09',
  canFly: false,
  canCook: true,
  yearsInspected: [1998, 2005, 2018],
  fueledBy: "jealousy",
  bestFriend: {
    name: "r04",
    yearsKnown: 12,
    isCharging: false
  }
};

// example invocation:

// example output:
/*
{
  false: 3
}
*/

//I: Two objects, robot1 and robot2 and some `value`.
//O: An object with a key of `value` and whose value is
// the number of occurrences of `value` in both `robot1` and robot2`.
// See example invocation and output above.
//C: None.
//E: None. We can assume `robot1` and `robot2` will always
// have the same structure.

var robotValueCounter = function (robot1, robot2, value) {


console.log(robot1, robot2, value)
//create an accumulator variable
//iterate arguments
  //iterate through object
    //if key in object is equal to value
      //increment counter by one
    //if key is an array
      //iterate through array
        //if element is boolean
          //increase counter
    //if key is object and not array
      //iterate through object
        //if key is boolean
          //increase counter
var counter = 0;

for(var i = 0; i < arguments.length; i++) {
  for (var key in arguments[i]) {
    if (arguments[i][key] === value) {
      counter++
    }
    if (Array.isArray(arguments[i][key])) {
      for (var j = 0; j < arguments[i][key].length; j++) {
        console.log(arguments[i][key][j])
        if(arguments[i][key][j] === value) {
          console.log('increase counter here', j, counter)
          counter++
          console.log(counter)
        }
      }
    }
    if(typeof arguments[i][key] === 'object' && !Array.isArray(arguments[i][key])) {
      for(var keys in arguments[i][key]) {
        if(arguments[i][key][keys] === value) {
          counter++
        }
      }
    }
  }
 }
 return counter
}




var result = robotValueCounter(x13, z09, false);
console.log(result)
