(function () {
  'use strict';

  window._ = {};


  _.identity = function (val) {
    return (val);
  };


  _.first = function (array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

 
  _.last = function (array, n) {
 
    if (n <= 0) { return []; }
    return n === undefined ? array[array.length - 1] : array.slice(-n);

  };

  
  _.each = function (collection, iterator) {
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


  _.indexOf = function (array, target) {

    var result = -1;

    _.each(array, function (item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };


  _.filter = function (collection, test) {
    var result = [];
    _.each(collection, function (item) {
      if (test(item)) {
        result.push(item);
      }
    });
    return result;
  };




  _.reject = function (collection, test) {
    var result = [];

    return _.filter(collection, function (element) {
      return !test(element);
    });
  };



  _.uniq = function (array, isSorted, iterator) {
    iterator = iterator || _.identity;
    var unique = {};
    var seen = {};
    var result = [];

    _.each(array, function (item) {
      if (unique[iterator(item)] === undefined) {
        unique[iterator(item)] = item;
      }
    });
    for (var key in unique) {
      result.push(Number(unique[key]));
    }
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


  _.reduceOLD = function (collection, iterator, accumulator) {

    if (accumulator === undefined) {
      accumulator = collection[0];
      collection = collection.slice(1);
      _.each(collection, function (element) {
        accumulator = iterator(accumulator, element);
      });
      return accumulator;
    }

    _.each(collection, function (element) {
      accumulator = iterator(accumulator, element);
    });
    return accumulator;
  };


  _.reduce = function (collection, iterator, accumulator) {

    var initalizing = arguments.length === 2;

    _.each(collection, function(element) {
      if ( initalizing ) {
        accumulator = element;
        initalizing = false;
      } else {
        accumulator = iterator(accumulator, element);
      }
    });
    return accumulator;
  };



_.contains = function (collection, target) {
    return _.reduce(collection, function (wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  _.every = function (collection, iterator) {
    iterator = iterator || _.identity;
    return !!_.reduce(collection, function (isEvery, number) {
      if (iterator(number)) {
        return isEvery;
      } else {
        return false;
      }
    }, true);
  };

  _.everyOPTIONAL = function (collection, iterator) {
    iterator = iterator || _.identity;
    return !!_.reduce(collection, function (isEvery, number) {
      return isEvery && iterator(number);
    }, true);
  };


  _.some = function (collection, iterator) {
    iterator = iterator || _.identity;

    return _.reduce( collection, function (isSome, number) {
      if (iterator(number)) {
        return true;
      } else {
        return isSome;
      }
    }, false);
  };






  _.someOPTION1 = function(collection, iterator) {

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

  _.someOPTION2 = function (collection, iterator) {

    iterator = iterator || _.identity;

    return !_.every(collection, function (x) {
      return !iterator(x);
    });
  };


  _.extend = function (obj) {
    _.each(arguments, function (el) {
      _.each(el, function (ele, ind) {
        obj[ind] = ele;
      });
    });
    return obj;
  };

  
  _.defaults = function (obj) {
    _.each(arguments, function (el) {
      _.each(el, function (ele, ind) {
        obj[ind] === undefined && (obj[ind] = ele);
      });
    });
    return obj;
  };


  











  _.once = function (func) {

    var alreadyCalled = false;
    var result;

 
    return function () {
      if (!alreadyCalled) {
     
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };


  _.memoizeFIRST = function (func) {

    var cache = {};
    var slice = Array.prototype.slice;

    return function () {
      var args = slice.call(arguments);
      var strArgs = JSON.stringify(args);
      if (!(strArgs in cache)) {
        cache[strArgs] = func.apply(this, arguments);
        return cache[strArgs];
      }
      return cache[strArgs];
    };
  };

  _.memoize = function (func) {
    var cache = {};

    return function () {
      var args = JSON.stringify(arguments);
      if ( !cache[args] ) {
        cache[args] = func.apply(this, arguments);
      }
      return cache[args];
    };
  };



  _.delay = function (func, wait) {
    var args = Array.prototype.slice.call(arguments);
    var sliceArgs = args.slice(2);
    if (sliceArgs.length !== 0) {
      return setTimeout(function () {
        return func.apply(null, sliceArgs);
      }, wait);
    }
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  };





  _.shuffle = function (array) {
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


  

  _.invoke = function (collection, functionOrKey, args) {

    return _.map(collection, function (element) {
      if ( typeof functionOrKey === 'string' ) {
        return element[functionOrKey].apply(element, args);
      } else {
        return functionOrKey.call(element);
      }
    });
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function (collection, iterator) {

    return _.map(collection, function (element) {

    });

  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3])
  // returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function () {
    var args = Array.prototype.slice.call(arguments);
    args.sort(function (a, b) { return b.length - a.length; });
    var accArr = [];

    for (var k = 0; k < args[0].length; k++) {
      if (accArr[k] === undefined) {
        accArr[k] = [];
        //accArr[i].length = args[0].length
      }
    }

    for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < args[i].length; j++) {
        accArr[j].push(args[i][j]);
      }
    }
    return accArr;
  };


  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.

  _.flatten = function (array, result) {
    var result = [];

    if (!Array.isArray(array)) {
      return array;
    } else {
      for ( var i = 0; i < array.length; i++ ) {
    //for (var key of array) {
        result = result.concat(_.flatten(array[i]));
      }
    }
    return result;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function () {

    var acc = {};

      //var args = [...arguments]
    var args = arguments;

    for ( var j = 0; j < args[0].length; j++ ) {
      for ( var k = 0; k < args.length; k++ ) {
        if ( _.indexOf(args[k + 1], args[0][j] ) !== -1) {
          acc[args[0][j]] = args[0][j];

        }
      }
    }
    return Object.values(acc);

  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function (arr) {
    var acc = {};
    var restArr = Array.prototype.slice.call(arguments);
    restArr = restArr.slice(1);
    var joinedArr = _.reduce(restArr, function (acc, ele) {
      return acc = acc.concat(ele);
    }, []);

    //arrays = [].concat(...arrays)

    for (var i = 0; i < arr.length; i++) {
      if ( _.indexOf(joinedArr, arr[i]) === -1) {
        acc[arr[i]] = arr[i];
      }
    }
    return Object.values(acc);
  };



  
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function (func, wait) {
  };
}());







