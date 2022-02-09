(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return (val);
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.

  //I - array, n (number)
  //O = array of the first n elements
  //C =
  //E = if n is undefined then return first element of array, if n is zero
  //    return an emtpy array, if n is greater than the length of the array,
  //    return array
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.

  //I - array, n (number)
  //O - array with last n elements from array
  //C - should not use the native version of any underbar methods
  //E - if n is undefined, return just last element.  If n is less than or equal to
  //    0, return empty array.  If n is greater than length of array , return the
  //    entire array



  //pseudocode

  //If n is undefined, return the last element of array
  //If n is less than or equal to 0, return empty array
  //If n is greater than length of array, return entire array.
  //create lastNItems set to emtpy array
  //iterate over array
    //start at length of array minus n
    //push current element to lastNItems
  //return lastNItems

  _.last = function(array, n) {
    // if (n === undefined) {
    //   return array[array.length - 1];
    // } else if (n <= 0) {
    //   return [];
    // } else if (n > array.length) {
    //   return array;
    // }

    //var lastNItems = [];
    // for (var i = array.length - n; i < array.length; i++){
    //   lastNItems.push(array[i])
    // }
    // return lastNItems

    if (n <= 0) { return []; }
    return n === undefined ? array[array.length - 1] : array.slice(-n);

  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.


  //I - array or object
  //O - no return, runs iterator function over each item
  //C - should not use the native version of any underbar methods
  //    should not mutate the input array
  //    should not return anything
  //    should be a function
  //E -

  //pseudocode
  //if input is an array
    //iterate through the array
      //for each item in array, pass item, index and arry to iterator
  //if input is an object
    //iterate through keys of collection
      //for each key in collection, pass value, key and collection to iterator

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.

  //I - array
  //O - index number for target in array, or -1 if not present in array
  //C - should not use the native version of any underbar methods
  //E -

  //pseudocode
  //create a result varaible
  //for each item in the array
    //if current item matches target AND result varaible is still -1
      //set result = current index
  //return result

  _.indexOf = function(array, target) {

    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };


  //I - array
  //O - new filtered array
  //C - should not use native version of any underbar method
  //    should produce a brand new array
  //E -

  //pseudocoding
  //create a new result variable
  //for each item in the collection
    //if current item passes truth test function
      //push current item into result array
  //return result

  // Return all elements of an array that pass a truth test.

  _.filter = function(collection, test) {
    var result = [];
    _.each(collection, function (item) {
      if (test(item)) {
        result.push(item);
      }
    });
    return result;
  };


  //I - array
  //O - new filtered array
  //C - should not use native version of any underbar method
  //    should produce a brand new array
  //E -

  //pseudocoding
  //create a new result variable
  //filter each element in the collection
    //if current element fails truth test function
      //push current element into result array
  //return result

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    var result = [];

    _.filter(collection, function (element) {
      if (!test(element)) {
        result.push(element);
      }
    });
    return result;
  };


  // Produce a duplicate-free version of the array.

    // You can safely ignore the isSorted parameter in your solution!
    // The isSorted parameter is only included for consistency with Underscore's
    // version of uniq, and its functionality is not specifically tested here.

    // The iterator specifies what _.uniq uses to decide if an item is a
    // duplicate or not. _.uniq should use an item's transformed value, the result
    // of invoking iterator on the item, to determine whether or not the original
    // item is unique in the collection so far.

    // If there is no defined iterator, _.uniq should default to use
    // an item's original value to determine uniqueness.

    //I - array [11.2, 11.9, 12.4, 12.6]
    //O - new sorted arrray [11.2, 11.9, 12.6]
    //C - should not use native version of any underbar methods
    //E - if no defined iterator, default to items original value to determine uniqueness
    //    can ignore isSorted parameter

    //pseudocode
    //create seen variable
    //create result variable
    //if iterator is undefined
      //for each item in array
        //check seen array for uniqueness
        //if unique (indexOf)
          //add item to result array
          //add item to seen array
    // for each item in array
      //if unique (indexOf)
        //add original item to result array
        //add transformed item  to seen array

  _.uniq = function(array, isSorted, iterator) {

    var seen = [];
    var result = [];

    if (iterator === undefined) {
      _.each(array, function(item) {
        if (_.indexOf (seen, item) === -1) {
          result.push(item);
          seen.push(item);
        }
      });
      return result;
    }

    _.each (array, function(item) {
      if (_.indexOf (seen, iterator(item)) === -1) {
        result.push(item);
        seen.push(iterator(item));
      }
    });
    return result;
  };


  //I - array
  //O - new array
  //C - should not use native version of any underbar methods
  //E - not mutate input array

  //pseudocode
  //create result variable
  //for each item in collection
    //add transfomred value, index and original array to result array
  //return result

  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var result = [];

    _.each(collection, function(item, index, array) {
      result.push(iterator(item, index, array));
    });
    return result;
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages

  //I - array of OBJECTS
  //O - array of the values of provided key
  //C - should not use the native version of any underbar method
  //E - do not modify original array

  //pseudocode
  //

  _.pluck = function(collection, key) {

    return _.map(collection, function(item) {
      return item[key];
    });
  };

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

  //I - array or oject
  //O - return a single value
  //C - do not mutate the input array
  //E - if no starting value, use first element as the accumulator
  //    all objects will have accumulator

  //pseudocode
  //if accumulator is undefined
    //set accumulator to first value
    //create a copy of array from index 1 to end of array
    //for each item copy of array
      //add transformed value of current accumulator and current element to accumulator
    //return accumulator

  _.reduce = function(collection, iterator, accumulator) {

    if (accumulator === undefined) {
      accumulator = collection[0];
      collection = collection.slice(1);
      _.each(collection, function(element) {
        accumulator = iterator(accumulator, element);
      });
      return accumulator;
    }

    _.each(collection, function(element) {
      accumulator = iterator(accumulator, element);
    });
    return accumulator;
  };


  // --------------------
  // ! END OF PART ONE !
  // --------------------
  //
  // Congrats! You've reached the end of Underbar Part 1!
  //
  // This means that you should return to Learn and move on to the next lesson:
  //    - Learn Unit: Debugging
  //    - Learn Lesson: Before Moving On
  //
  // CAUTION:
  //
  //   - Do not proceed on to Underbar Part 2 (below) without reading the
  //     slides on Scopes & Closure
  //
  // --------------------


  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {

    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    if (iterator === undefined) {
      iterator = _.identity;
      return _.reduce(collection, function(isEvery, number) {
        if (iterator(number)) {
          return isEvery;
        }
        return false;
      }, true);
    }

    return _.reduce(collection, function(isEvery, number) {
      if (iterator(number)) {
        return isEvery;
      }
      return false;
    }, true);
  };




  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one

  //I - collection
  //O - boolean
  //C -
  //E - if no iterator, provide one _.identity
  //    if empty collection, return false
  //    pass for mixed collection truthy/falsey

  //There is a clever way to re-use every()

  //pseudocode
  //if empty array, return false
  //if iterate through the array
    //if item === true
      //return true
  //otherwise
    //return false

  _.some = function(collection, iterator) {

    if (collection.length === 0) {
      return false;
    }
    if (iterator === undefined) {
      iterator = _.identity;
      for (var i = 0; i < collection.length; i++) {
        if (iterator(collection[i])) {
          return true;
        }
      }
    }

    for (var i = 0; i < collection.length; i++) {
      if (iterator(collection[i])) {
        return true;
      }
    }
    return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla

  //I - Object
  //O - Object
  //C - do not override properties in object
  //    extend from multiple source objects
  //    in case of conflicts, it should use the last value
  //E - fail if not an object

  // _.extend = function(obj) {
  //   var sliced = Array.prototype.slice.call(arguments);
  //   for (var i = 1; i < sliced.length; i++) {
  //     for (var key in sliced[i]) {
  //       obj[key] = sliced[i][key];
  //     }
  //   }
  //   return obj;
  // };

  _.extend = function(obj) {
    _.each(arguments, function(el) {
      _.each(el, function(ele, ind) {
        //console.log(el, ele, ind);
        obj[ind] = ele;
      });
    });
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  // I - Object
  // O - object
  // C -
  // E - don't overwrite a key already in object

  //pseudocode
  //
  //iterate through array
    //iterate through obj

  _.defaults = function(obj) {
    _.each(arguments, function(el) {
      _.each(el, function(ele, ind) {
        if (obj[ind] === undefined) {
          obj[ind] = ele;
        }
      });
    });
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
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

  //pseudocode
  //create a counter variable to monitor number of times
  //

  //when called by a function, check to see if answer has been computed already
  //check cache to see if argument has already been supplied

  _.memoize = function (func) {

    var cache = {};
    var slice = Array.prototype.slice;

    return function() {
      var args = slice.call(arguments);
      var strArgs = JSON.stringify(args);
      if (!(strArgs in cache)) {
        cache[strArgs] = func.apply(this, arguments);
        return cache[strArgs];
      }
      return cache[strArgs];
    };
  };


  //from source code
  // Memoize an expensive function by storing its results.

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms

  _.delay = function(func, wait) {
    var args = Array.prototype.slice.call(arguments);
    var sliceArgs = args.slice(2);
    if (sliceArgs.length !== 0) {
      return setTimeout(function() {
        return func.apply(null, sliceArgs);
      }, wait);
    }
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  };


  /**
   * COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice

  //create an empty variable
  //while array is stilll alive
    //generate random number based on array length
    //push that element in accArr
    //splice it from array



  _.shuffle = function(array) {
    var accArr = [];
    var newArr = array.slice();
    var randInd = 0;

    while (newArr.length > 0) {
      randInd = Math.floor(Math.random() * (newArr.length));
      accArr.push(newArr[randInd]);
      newArr.splice(randInd, 1);
    }
    return accArr;
  };


/**
   * ADVANCED: EXTRA CREDIT BEGINS HERE
   * =================
   *
   * Note: This is the end of the required pre-course curriculum. Feel free to continue,
   * but everything beyond here is extra credit.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3])
  // returns [['a',1], ['b',2], ['c',3], ['d',undefined]]

  //find longest array in arguments
  //iterate across all input arrays
   //iterate through
  _.zip = function() {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    args.sort(function (a, b) { return b.length - a.length; });
    var accArr = [];

    // for (let i = 0; i < args.length; i++) {
    //   accArr = accArr[i]
    //   for(let j = 0; j < args[i].length; j++) {

    //     accArr.push(args[j][i])
    //     console.log(accArr)
    //   }
    // }


    console.log(accArr);
    //return accArr
  };


  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());







