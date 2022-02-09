
window._ = {}


_.identity = function (val) {
  return (val)
}
//EACH///////////////////////////////////////
_.each = (function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection)
    }
  } else if (typeof collection === 'object') {
    for (var key in collection) {
      iterator(collection[key], key, collection)
    }

  }
})
///////////////////////////////////////////////


//indexOF  ///////////////////////////////////
_.indexOf = function (array, target) {
  var result = -1;
  _.each(array, function (item, index) {
    //console.log(item, index, result)
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result
};
//////////////////////////////////////////////

//filter ////////////////////////////////////
_.filter = function (collection, test) {
  var result = [];
  _.each(collection, function (item) {
    if (test(item)) {
      result.push(item);
    }
  });
  return result;
}

/////////////////////////////////////////////

//reject ///////////////////////////////////

_.reject = function (collection, test) {
  var result = [];
  _.each(collection, function (item) {
    if (!test(item)) {
      result.push(item);
    }
  });
  return result;
};
//////////////////////////////////////////////
//OPTIONAL REJECT WITH NEGATE

// _.reject = function(collection, test) {
//   return _.filter(collection, _.negate(test))
// };

// _.negate = function (predicate) {
//   return function () {
//     return !predicate.apply(this, arguments)
//   };
// }

// uniq //////////////////////////////////////
// _.uniq = function(array, iterator){
//   var seen = [];
//   var result = [];

//   if(iterator === undefined){
//     _.each(array, function(item){
//       if(!seen.includes(item)) {
//         result.push(item);
//         seen.push(item)
//       } else {
//         seen.push(item);
//       }
//     })
//   }
//   _.each(array, function(item){
//     if(!seen.includes(iterator(item))) {
//       result.push(item);
//       seen.push(iterator(item));
//     } else {
//       seen.push(item);
//     }
//   })
// return result;
// }

_.uniq = function (array, isSorted, iterator) {

  var seen = [];
  var result = [];

  if (iterator === undefined) {
    _.each(array, function (item) {
      if (_.indexOf(seen, item) === -1) {
        result.push(item);
        seen.push(item);
      } else {
        seen.push(item);
      }
    });
    return result;
  }

  _.each(array, function (item) {
    if (_.indexOf(seen, iterator(item)) === -1) {
      result.push(item);
      seen.push(iterator(item));
    } else {
      seen.push(iterator(item));
    }

  });
  return result;
};


////////////////////////////////////////////////

// map ////////////////////////////////////////

_.map = function (collection, iterator) {
  var result = [];

  _.each(collection, function (item, index, array) {
    result.push(iterator(item, index, array));
  })
  return result;
}

////////////////////////////////////////////////

// pluck //////////////////////////////////////

_.pluck = function (collection, key) {
  return _.map(collection, function (item) {
    return item[key];
  });
};

//////////////////////////////////////////////


// reduce ///////////////////////////////////

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as its second argument.
//
// Since JavaScript object properties are not stored in any particular order,
// we cannot reliably anticpate what property will be accessed first during
// property iteration. Given this, it is not necessary for your solution
// to be able to handle the case of an object being passed in with no
// initial accumulator.
//
// Example:
//   var numbers = [1,2,3];
//   var sum = _.reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
//
//   var identity = _.reduce([5], function(total, number){
//     return total + number * number;
//   }); // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.

//I - array OR object
//O


_.reduce = function (collection, iterator, accumulator) {
  // TIP: To support both arrays and objects, try re-using each() here
  //if(accumulator)

  //iterate through the array
  //add current item to accumulator sum
  //return accumulator sum

  if (accumulator === undefined) {
    accumulator = collection[0]
    collection = collection.slice(1)
    _.each(collection, function (element) {
      accumulator = iterator(accumulator, element)
    })
    return accumulator;
  }

  _.each(collection, function (element) {
    accumulator = iterator(accumulator, element)
  });
  return accumulator;
}


var result = _.reduce([1, 2, 3], function (memo, element) {
  return memo;
});
//console.log(result)
//expect(result).to.equal(1);

var result = _.reduce([3, 2, 1], function (memo, item) {
  return memo - item;
}, 10);
//console.log(result)
//4



var callCount = 0;
var returnFalsy = function (total, item) {
  callCount++;
  if (callCount === 1) {
    return undefined;
  } else {
    return item + 1;
  }
};
var total = _.reduce([1, 1, 2], returnFalsy);
//console.log(total);
//expect(total).to.equal(3);


////////////////////////////////////////////////////////////////
//
//
//
//
//
//  PART TWO
//
//
// contains
// every
// some
// extend
// defaults
// once
// memoize
// delay
// shuffle
//
//
//
//
/////////////////////////////////////////////////////////////////


_.contains = function (collection, target) {
  // TIP: Many iteration problems can be most easily expressed in
  // terms of reduce(). Here's a freebie to demonstrate!
  return _.reduce(collection, function (wasFound, item) {
    if (wasFound) {
      return true;
    }
    return item === target;
  }, false);
};

_.every = function (collection, iterator) {
  if (iterator === undefined) {
    iterator = _.identity;
    return _.reduce(collection, function (isEvery, number) {
      if (iterator(number)) {
        return isEvery;
      }
      return false;
    }, true);
  }

  return _.reduce(collection, function (isEvery, number) {
    if (iterator(number)) {
      return isEvery;
    }
    return false;
  }, true);
};


_.some = function (collection, iterator) {
};

_.extend = function (obj) {
  _.each(arguments, function (el) {
    _.each(el, function (ele, ind) {
      console.log(el, ele, ind);
      obj[ind] = ele;
    });
  });
  return obj;
};


_.defaults = function (obj) {
};

_.once = function (func) {
  // TIP: These variables are stored in a "closure scope" (worth researching),
  // so that they'll remain available to the newly-generated function every
  // time it's called.
  var alreadyCalled = false;
  var result;

  // TIP: We'll return a new function that delegates to the old one, but only
  // if it hasn't been called before.
  return function () {
    if (!alreadyCalled) {
      // TIP: .apply(this, arguments) is the standard way to pass on all of the
      // infromation from one function call to another.
      result = func.apply(this, arguments);
      alreadyCalled = true;
    }
    // The new function always returns the originally computed result.
    return result;
  };
};



// Memorize an expensive function's results by storing them.
// memoize could be renamed to oncePerUniqueArgumentList; memoize does the
// same thing as once, but based on many sets of unique arguments.
//
// _.memoize should return a function that, when called, will check if it has
// already computed the result for the given argument and return that value
// instead if possible.

//I - function (expensive function)
//O - return a function
//C -
//E -

_.memoize = function (func) {
};


_.delay = function (func, wait) {
};


_.shuffle = function (array) {
};

































































///////////////////////////////////////////////////////////////////
//
//
//
//
//
//  PRACTICE WRITING ALL THE FUNCTIONS OVER AGAIN
//\//
//
//
//
//
//
/////////////////////////////////////////////////////////////////////


_.identity = function (val) {
  return (val);
};

_.first = function (array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
};

_.last = function (array, n) {
  if (n <= 0) { return []; }
}

_.each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    for (var key in collection) {
      iterator(collection[key], key, collection)
    }
  }
};

_.indexOf = function (array, target) {
  var result = -1;

  _.each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index
    }
  });
  return result;
}

_.filter = function (collection, test) {
  var result = [];
  _.each(collection, function (item) {
    if (test(item)) {
      result.push(item);
    }
  });
  return result;
}

_.reject = function (collection, test) {
  var result = [];
  _.filter(collection, function (item) {
    if (!test(item)) {
      result.push(item);
    }
  });
  return result;
}

_.uniq = function (array, isSorted, iterator) {
  var seen = [];
  var result = [];

  if (iterator === undefined) {
    _.each(array, function (item) {
      if (_.indexOf(seen, item) === -1) {
        result.push(item);
        seen.push(item);
      }
    });
    return result;
  }
  _.each(array, function (item) {
    if (_.indexOf(seen, iterator(item)) === -1) {
      result.push(item);
      seen.push(iterator(item));
    }
  });
  return result;
};

_.map = function (collection, iterator) {
  var result = [];

  _.each(collection, function (item, index, array) {
    result.push(iterator(item, index, array));
  });
  return result;
};

_.pluck = function (collection, key) {
  return _.map(collection, function (item) {
    return item[key];
  });
};

_.reduce = function (collection, iterator, accumulator) {

  if (accumulator === undefined) {
    accumulator = collection[0];
    collection = collection.slice(1);
    _.each(collection, function (el) {
      accumulator = iterator(accumulator, el)
    });
    return accumulator;
  }

  _.each(collection, function (el) {
    accumulator = iterator(accumulator, el);
  });
  return accumulator;
}

_.range = function (start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


_.contains = function (collection, target) {
  return _.reduce(collection, function (wasFound, item) {
    if (wasFound) {
      return true;
    }
    return item === target;
  }, false);
}



































function palindrome() {
  var result;
  for (let i = 999; i > 900; i--) {
    for (let j = 999; j > 900; j--) {
      result = i * j;
      if (result === parseInt(result.toString().split('').reverse().join(''))) {
        return (result)
      }
    }
  }
}
// console.log(palindrome())

function smallestNum() {
  var num = 20;
  var counter = 0
  while (num < Infinity) {
    for (let i = 1; i <= 20; i++) {
      if (num % i === 0) {
        counter++
      }
      if (counter === 20) {
        return num;
      }
    }
    num++;
    counter = 0;
  }
}
//console.log(smallestNum())

var isPrime = function (element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      //console.log(element);
      return false;
    }
  }
  return element > 1;
}

var listAllPrimes = function () {
  var counter = 0
  for (let i = 0; i < 1000000; i++) {
    if (isPrime([i])) {
      console.log(i)
      counter++
    }
    if (counter === 10001) {
      return i
    }
  }
}
//console.log('10001 Prime Number:', listAllPrimes())

var largestPrimeFactor = function (num) {

  var isPrime = function (element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        //console.log(element);
        return false;
      }
    }
    return element > 1;
  }
  var largestPrime = 0;
  for (let i = 0; i < num; i++) {
    console.log
    if (isPrime(i)) {
      if (i > largestPrime) {
        largestPrime = i
      }
    }
  }
  console.log('largestPrime', largestPrime)
}

//largestPrimeFactor(4999999)

var differenceOfSquares = function (num) {

}








// Example///////////////////////
var people = ['Tom', 'Dick', 'Harry'];
var newObj = {}

var test = _.each(people, function (el, ind, ar) {
  newObj[el] = ind

  //console.log(el, ind, ar)
  // newArr.push(el)

})
//console.log(newObj)

// EXAMPLE TWO
var numbers = [11.2, 11.9, 12.4, 12.6];
var otherNumbers = [1, 2, 1, 3, 1, 4];
var roundNumber = function (number) { return Math.round(number); };
var isOne = function (value) { return value === 1; };
// var result = _.uniq(numbers, true, roundNumber);
// console.log(result)
var resul92 = _.uniq(otherNumbers, false, isOne);
//console.log(result2)
//expect(_.uniq(numbers, true, roundNumber)).to.eql([11.2, 11.9, 12.6]);
//expect(_.uniq(otherNumbers, false, isOne)).to.eql([1, 2]);



