



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
//robotValueCounter(x13, z09, false);

// example output:
/*
{
  false: 3
}
*/

var robotValueCounter = function(robot1, robot2, value) {
  var counter = 0;

  for (var key in robot1) {
    if (robot1[key] === value) {
      console.log(robot1[key])
      counter++
    }
    console.log(key)

  }

  //return counter,
};


var result = robotValueCounter(x13, z09, false);
console.log(result)



var robots = [
  {
    name: 'x13',
    canFly: true,
    canCook: false,
    yearsInspected: [ 2002, 2005, 2010 ],
    fueledBy: 'cookies',
    bestFriend: { name: 'z09', yearsKnown: 4, isCharging: true }
  },
  {
    name: 'z09',
    canFly: false,
    canCook: true,
    yearsInspected: [ 1998, 2005, 2018 ],
    fueledBy: 'jealousy',
    bestFriend: { name: 'r04', yearsKnown: 12, isCharging: false }
  },
  {
    name: 'r3d2',
    canFly: true,
    canCook: true,
    yearsInspected: [ 1977, 1980, 1983, 1999, 2002, 2005 ],
    fueledBy: 'beep-boop',
    bestFriend: { name: 'c4p0', yearsKnown: 2, isCharging: true }
  }
];

// example invocation:
//createPotluckInvites(robots);

// example output:
[
  {name: 'z09', bestFriend: 'r04'},
  {name: 'r3d2', bestFriend: 'c4p0'}
];

var result = _(robots).chain().filter(function(x) {if (x.canCook === true) {return x13}}).value().reduce(function (obj, el) {obj['name'] = el.name; obj['bestFriend'] = el.bestFriend.name; return obj}, {});
//close but no cigar
console.log(result)



//Mitchell SOLUTION
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
​
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
​
var robotValueCounter = function(robot1, robot2, value) {
   var occurences = {};
   occurences[value] = 0;
   for (var key in robot1) {
       if (!Array.isArray(robot1[key]) && typeof robot1[key] === 'object') {
           for (var prop in robot1[key]) {
               if (robot1[key][prop] === value) {
                   occurences[value]++;
               }
           }
       } else if (Array.isArray(robot1[key])) {
           for (var i = 0; i < robot1[key].length; i++) {
               if (robot1[key][i] === value) {
                   occurences[value]++;
               }
           }
       } else {
           if (robot1[key] === value) {
               occurences[value]++;
           }
       }
   }
   for (var key in robot2) {
       if (!Array.isArray(robot2[key]) && typeof robot2[key] === 'object') {
           for (var prop in robot2[key]) {
               if (robot2[key][prop] === value) {
                   occurences[value]++;
               }
           }
       } else if (Array.isArray(robot2[key])) {
           for (var i = 0; i < robot2[key].length; i++) {
               if (robot2[key][i] === value) {
                   occurences[value]++;
               }
           }
       } else {
           if (robot2[key] === value) {
               occurences[value]++;
           }
       }
   }
   return occurences;
};
​
​
robotValueCounter(x13, z09, false);