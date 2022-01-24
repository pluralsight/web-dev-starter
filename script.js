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
//console.log(newObj)

//indexOF  ///////////////////////////////////
_.indexOf = function(array, target){
  var result = -1;
    _.each(array, function(item, index) {
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

// _.reject = function(collection, test) {
//   return _.filter(collection, _.negate(test))
// };

// _.negate = function (predicate) {
//   return function () {
//     return !predicate.apply(this, arguments)
//   };
// }

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
var result3 = _.uniq(otherNumbers, false, isOne);
//console.log(result2)
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


  var result5 = _.reduce([1, 2, 3], function(memo) {
    return memo;
  });
  //console.log(result)
  //expect(result).to.equal(1);

  var result6 = _.reduce([3, 2, 1], function(memo, item) {
    return memo - item;
  }, 10);
  //console.log(result)
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



2






      var fruits = [
        'apple',
        'banana',
        'strawberry',
        'starfruit',
        'pear',
        'lemon',
        'lime,',
        'blueberry',
        'cherry',
        'apricot',
        'blackberry',
        'coconut',
        'grape',
        'orange',
        'pineapple',
        'peach',
        'papaya'
      ];



      var upperCaseFruits = function(fruits) {

        var result = _.map(fruits, function(item, index, array){
          return item.toUpperCase()
        });
        return result
      };
//console.log(upperCaseFruits(fruits))









      var blah = function() {
        var counter = 0;
        var num = 20;
        var isGood = false;
        while (!isGood) {
          for (var i = 1; i <= 20; i++) {
            if (num % i === 0) {
              counter++;
            }
          }
          if (counter === 20) {
            isGood = true;
          }
          counter = 0;
          num++;
        }
        return num;
      };




      var groceries = [
        {
          id: 1,
          product: 'Olive Oil',
          price: '$' + 12.1
        },
        {
          id: 2,
          product: 'Tomato Soup',
          price: '$' + 3.48
        },
        {
          id: 3,
          product: 'Cheesecake',
          price: '$' + 17.36
        },
        {
          id: 4,
          product: 'Sirloin Steak',
          price: '$' + 14.8
        },
        {
          id: 5,
          product: 'Brie Cheese',
          price: '$' + 23.28
        },
        {
          id: 6,
          product: 'Ground Beef',
          price: '$' + 1.44
        },
        {
          id: 7,
          product: 'Tofu',
          price: '$' + 11.11
        },
        {
          id: 8,
          product: 'Lentils',
          price: '$' + 21.77
        },
        {
          id: 9,
          product: 'Cola, 12pk',
          price: '$' + 22.58
        },
        {
          id: 10,
          product: 'Skittles',
          price: '$' + 3.79
        },
        {
          id: 11,
          product: 'Flour - White',
          price: '$' + 5.59
        },
        {
          id: 12,
          product: 'Sauce - Pizza',
          price: '$' + 9.23
        },
        {
          id: 13,
          product: 'Whole Milk, Gallon',
          price: '$' + 6.43
        },
        {
          id: 14,
          product: 'Butter',
          price: '$' + 5.11
        },
        {
          id: 15,
          product: 'Bread - Wheat',
          price: '$' + 15.91
        },
      ];









      var applyCoupon = function(groceries, coupon) {
        //console.log(groceries)

       return _.map(groceries, function(el){
          var num1 = parseFloat(el.price.slice(1))
          if(!coupon){coupon = 0}
          return el.salePrice = `$${(num1 - (num1 * coupon)).toFixed(2)}`
        });
      };
      applyCoupon(groceries, .2)
      // console.log(groceries)




















































var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length: 5
};

var sliced = Array.prototype.slice.call( my_object, 3 );
//console.log(sliced)











































var currentInventory = {
  shoes: [
    {name: 'tasselled black low-top lace-up', price: 850, designer: 'Brunello Cucinelli'},
    {name: 'tasselled green low-top lace-up', price: 1100, designer: 'Gucci'},
    {name: 'plain beige suede moccasin', price: 950, designer: 'Balenciaga'},
    {name: 'plain olive suede moccasin', price: 2000, designer: 'Balenciaga'}
  ],
  shirts: [
    {name: 'silk tall t-shirt', price: 1000, designer: 'Brunello Cucinelli'},
    {name: 'plain white t-shirt', price: 950, designer: 'Gucci'},
    {name: 'already popped collar', price: 900, designer: 'Balenciaga'}
  ],
  hats: [
    {name: 'red logo', price: 950, designer: 'Brunello Cucinelli'},
    {name: 'tricorne', price: 700, designer: 'Gucci'},
    {name: 'viking helmet', price: 250, designer: 'Balenciaga'},
    {name: 'beret', price: 50, designer: 'Balenciaga'}
  ]
};

var getAveragePriceforShoes = function(inventory){

  // return inventory.shoes.forEach(function(item){
  // console.log(item.price)
  // })

  let shoeArray = inventory.shoes.map(c => c.price)
  //console.log('shoeArray', shoeArray)

  return inventory.shoes.map(c => c.price).reduce((a,b) => a + b, 0)/inventory.shoes.length

  // let aveShoePrice = shoeArray.reduce(function(previousValue, currentValue){
  //   return previousValue + currentValue
  // }, 0)
  // return aveShoePrice = aveShoePrice/shoeArray.length

};
//designerSummary {
//designerName : average price
//}

function designerAve (obj){
  var cucinelliSum = 0;
  var cucinelliTot = 0;
  var balenciagaSum = 0;
  var balenciagaTot = 0;
  var gucciSum = 0;
  var gucciTot = 0;
  var accObj = {};
  var allPrices = 0

  totalNumOfItems = 0;

  for (var keys in obj){
    for(let i = 0; i < obj[keys].length; i++){
      var item = obj[keys][i]
      //console.log(item.designer, item.price)

      if(!accObj.hasOwnProperty(item.designer)){  //if accObj doesn't have (someValue) as a key
      accObj[item.designer] = {
        allPrices : item.price,
        totalNumOfItems : 1
        }
      }else {
        accObj[item.designer].allPrices += item.price
        accObj[item.designer].totalNumOfItems++

      }

      //iterate over accObj
        //for each property, add property with the same key name
        //set the value to the allprices divided by totalNumOfItems

      var designerAvePrices = {}

      for(let keys in accObj){
        designerAvePrices[keys] = Math.round(accObj[keys].allPrices/accObj[keys].totalNumOfItems);

      }









    //   if(obj[keys][i].designer === 'Brunello Cucinelli'){
    //     cucinelliSum += obj[keys][i].price
    //     cucinelliTot++
    //   } else if (obj[keys][i].designer === 'Balenciaga'){
    //     balenciagaSum += obj[keys][i].price
    //     balenciagaTot++
    //   }else if (obj[keys][i].designer === 'Gucci'){
    //     gucciSum += obj[keys][i].price
    //     gucciTot++
    }
  }
  // var designerSummary = {
  // "Brunello Cucinelli" :  cucinelliSum/cucinelliTot,
  // Balenciaga           :  balenciagaSum/balenciagaTot,
  // Gucci                :  gucciSum/gucciTot
  //   }
return designerAvePrices
}

//console.log(designerAve(currentInventory))





let listAllShirts = function (obj){
  return obj.shirts.map(c => (`${c.designer} ${c.name} ${c.price}`))
}
//console.log(listAllShirts(currentInventory))
// TODO
// Create a function listAllShirts that returns an array of strings with a summary of all shirts with
//designer, name, and price.
// Partial example output:
// createSummary(currentInventory) -> ['Brunello Cucinelli silk tall t-shirt 1000', ...];



















// const companies = [
//   {name: "Company One", category: "Finance", start: 1981, end: 2003},
//   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i])
// }

// //forEach
// accArr = [];
// companies.forEach(function(comp) {
//   //console.log(comp)
//   if(comp.category === 'Retail' && comp.start > 1981){
//     accArr.push(comp)
//   }
//   // accArr.push(comp)
//   // console.log(accArr)
//   // console.log(comp)
// });
// //console.log(accArr)



// //filter
// //let accArrFilter = [];
// // for(let i = 0; i < ages.length; i++){
// //   if(ages[i] >= 21){
// //     accArrFilter.push(ages[i])
// //   }
// // }
// // console.log(accArrFilter)
// const accArrFilter = ages.filter(function(a){
//   // if(a >= 21){
//   //   return true;
//   return (a >= 21)

// });
// //console.log(accArrFilter)

// const retailCompanies = companies.filter(function(c){
//   return (c.category === 'Retail')
// });

// //console.log(retailCompanies)

// const eightiesCompanies = companies.filter(function(c){
//   if(c.start > 1979 && c.start < 1990){
//     return true
//   }
// });
// //console.log(eightiesCompanies)

// const tenYearComp = companies.filter(function(c){
//   return (c.end - c.start >= 10)
// });
// //console.log(tenYearComp)


// //map
// const compNames = companies.map(function(c){
//   return ([`Company: ${c.name}, Years in Business: ${(c.end - c.start)}`]);
// });
// // console.log(compNames)




//sort

//reduce












// function filter(array, callbackFunction) {
//   return array.filter(callbackFunction);
// }

// //Here is an example to get a sense of what filter should do.

// var input = [1, 2, 3, 4];
// var output = filter(input, function(value) {
//   //return value % 2 === 0;
//   if(value % 2 === 0){
//     return false;
//   } else {
//     return true
//   }

// })

// console.log(output); // [2, 4]











































// var data = [
//   {id: 1, firstName: "Ryan", lastName: "Guill", email: "ryanguill@gmail.com"},
//   {id: 2, firstName: "John", lastName: "Doe", email: "johndoe@example.com"},
//   {id: 3, firstName: "Mary", lastName: "Smith", email: "marysmith@example.com"}
// ];

// var toFieldFormat = function(item) {
//   return item.firstName + " " + item.lastName + " <" + item.email + ">";
// };

// var newData = data.map(toFieldFormat);
// //console.log(newData)

// var newData = data.map(function(value) {
//     return `${value.firstName} ${value.lastName} <${value.email}>`
// });

// //console.log('#@#@#@#@#@#@#2', newData)


// function map(array, callbackFunction) {
//   var accArr = []
//   for(let i = 0; i < array.length; i++){
//     accArr.push(callbackFunction(array[i]))
//   }
// return accArr;
// }

// function someNewFunction(value){
//   return `${value.firstName} ${value.lastName} <${value.email}>`
// }


// var result = map(data, someNewFunction)
// console.log(result)












































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



