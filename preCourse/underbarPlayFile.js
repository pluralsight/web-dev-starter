window._ = {}


_.identity = function (val) {
  return (val)
}
//EACH///////////////////////////////////////
_.each = (function(collection, iterator) {
  if(Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++){
      iterator(collection[i], i , collection)
    }
  } else if(typeof collection === 'object') {
    for(var key in collection) {
      iterator(collection[key], key, collection)
    }

  }
})
///////////////////////////////////////////////


var people = ['Tom', 'Dick', 'Harry'];
var newObj = {}

var test = _.each(people, function(el, ind, ar){
  newObj[el] = ind

  //console.log(el, ind, ar)
  // newArr.push(el)

})
console.log(newObj)

//indexOF  ///////////////////////////////////
_.indexOf = function(array, target){
  var result = -1;
    _.each(array, function(item, index) {
      console.log(item, index, result)
      if(item === target && result === -1) {
        result = index;
      }
    });
return result
};
//////////////////////////////////////////////

//filter ////////////////////////////////////
_.filter = function(collection, test) {
  var result = [];
    _.each(collection, function(item){
      if(test(item)) {
        result.push(item);
      }
    });
return result;
}

/////////////////////////////////////////////

//reject ///////////////////////////////////

_.reject = function(collection, test) {
  var result = [];
    _.each(collection, function(item){
      if(!test(item)) {
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

_.uniq = function(array, isSorted, iterator) {

  var seen = [];
  var result = [];

  if (iterator === undefined) {
    _.each(array, function(item) {
      if (_.indexOf (seen, item) === -1) {
        result.push(item);
        seen.push(item);
      } else {
        seen.push(item);
      }
    });
    return result;
  }

  _.each (array, function(item) {
    if (_.indexOf(seen, iterator(item)) === -1) {
      result.push(item);
      seen.push(iterator(item));
    } else {
      seen.push(iterator(item));
    }

  });
  return result;
};

var numbers = [11.2, 11.9, 12.4, 12.6];
var otherNumbers = [1, 2, 1, 3, 1, 4];
var roundNumber = function(number) { return Math.round(number); };
var isOne = function(value) { return value === 1; };
// var result = _.uniq(numbers, true, roundNumber);
// console.log(result)
var result2 = _.uniq(otherNumbers, false, isOne);
console.log(result2)
//expect(_.uniq(numbers, true, roundNumber)).to.eql([11.2, 11.9, 12.6]);
//expect(_.uniq(otherNumbers, false, isOne)).to.eql([1, 2]);


////////////////////////////////////////////////

// map ////////////////////////////////////////

_.map = function (collection, iterator) {
  var result = [];

  _.each(collection, function(item, index, array) {
    result.push(iterator(item, index, array));
  })
return result;
}

////////////////////////////////////////////////

// pluck //////////////////////////////////////

_.pluck = function(collection, key){
  return _.map(collection, function(item) {
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


  _.reduce = function(collection, iterator, accumulator) {
    // TIP: To support both arrays and objects, try re-using each() here
    //if(accumulator)

    //iterate through the array
      //add current item to accumulator sum
    //return accumulator sum

    if (accumulator === undefined){
      accumulator = collection[0]
      collection = collection.slice(1)
      _.each(collection, function(element) {
        accumulator = iterator(accumulator, element)
      })
    return accumulator;
    }

    _.each(collection, function(element) {
      accumulator = iterator(accumulator, element)
    });
    return accumulator;
  }


  var result = _.reduce([1, 2, 3], function(memo) {
    return memo;
  });
  console.log(result)
  //expect(result).to.equal(1);

  var result = _.reduce([3, 2, 1], function(memo, item) {
    return memo - item;
  }, 10);
  console.log(result)
  //4



    // var callCount = 0;
    // var returnFalsy = function(total, item) {
    //   callCount++;
    //   if (callCount === 1) {
    //     return undefined;
    //   } else {
    //     return item + 1;
    //   }
    // };
    // var total = _.reduce([1, 1, 2], returnFalsy);
    // console.log(total);
    // //expect(total).to.equal(3);




