/*
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//forEach #####################################################

// for (let i = 0; i < companies.length; i++){
//   console.log(companies[i]);
// }

// companies.forEach(function(el){
//   console.log(el.end - el.start)
// });


//filter  ##################################################

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }
//console.log(canDrink)


/////////////
// let canDrink = ages.filter(function(el){
//   if(el >= 21){
//     return true
//   }
// });
// console.log (canDrink);
/////////////



////////////
// const retailCompanies = companies.filter(function(el){
//   if(el.category === "Retail") {
//     return true;
//   }
// })
// console.log(retailCompanies)
///////////


/////////////
const eightiesCompanies = companies.filter(function(el){
  if(el.start > 1979 && el.start < 1990 && el.category === 'Retail'){
    return true;
  }
})
const eightiesCompaniesNames = eightiesCompanies.map(function(el){
  if(el.name !== undefined){
    return el.name
  }
})
const companyFour = eightiesCompaniesNames.filter(function(el){
  if(el === 'Company Four'){
    return true
  }
})

var flat = companyFour.join('')

// console.log(eightiesCompanies)   //[{…}, {…}]
// console.log(eightiesCompaniesNames)  //['Company Four', 'Company Nine']
// console.log(companyFour)  //['Company Four']
// console.log(flat)  //Company Four
/////////////

//Get companies that lasted 10 years or more using filter
const tenYear = companies.filter(function(el) {
  if(el.end - el.start >= 10){
    return true
  }
})
//console.log(tenYear)
////////////////////////

//Get all financial companies that lasted 10 years or more
const finTenYear = companies.filter(function(el){
  if(el.end - el.start >= 10 && el.category === 'Finance')
  return true;
})
//console.log(finTenYear)

//create an array of all the names of companies that are financial and lasted ten years
const finTenYearList = finTenYear.map(function(el){
  return el.name
});
//console.log(finTenYearList.join(', '))
////////////////////

//get array of ages for all companies
const compAges = companies.map(function(el, index, array){
  return el.end - el.start
})
const aveAgeofComp = [Math.floor(compAges.reduce(function(a,b){
  return (a + b)
}, 0)/compAges.length)]

// console.log(compAges)
// console.log(aveAgeofComp)


//map ###################################################################
//all company names
var allNames = companies.map(function(el){
  return el.name
}).filter(function(el){
    //return el.indexOf('Com') !== -1
    if(el.length >= 12){
      return el
    }
}).join(', ')
console.log(allNames)






//sort

//reduce







*/


//A civilized guide to JS array methods (pdf)
//Documents/HackReactor/

const heroes = [
  {name: 'Hulk', strength: 90000},
  {name: 'Spider-Man', strength: 25000},
  {name: 'Hawk Eye', strength: 136},
  {name: 'Thor', strength: 100000},
  {name: 'Black Widow', strength: 136},
  {name: 'Vision', strength: 5000},
  {name: 'Scarlet Witch', strength: 60},
  {name: 'Mystique', strength: 120},
  {name: 'Namora', strength: 75000},
  {name: 'Captain America', strength: 362},
  {name: 'Deadpool', strength: 1814},
  {name: 'Black Panther', strength: 1814},
 ];

//FIND                                 FIND
 function isHulk(hero) {
  return hero.name === 'Namora';
 }
 const hulk = heroes.find(isHulk);
 console.log(hulk)

 //MAP                                  MAP
 function getName(hero) {
  return hero.name;
 }
 const names = heroes.map(getName);
 console.log(names)

 //FILTER                             FILTER
 function strong(hero) {
 return hero.strength >= 200;
}
const tuff = heroes.filter(strong);
console.log(tuff)

//EVERY                               EVERY
// function strong(hero) {
//   return hero.strength >= 200;
//  }
//  const tuff = heroes.every(strong);

//CONCAT                              CONCAT
const extras = [
  {name: 'Cyclops', strength: 136},
  {name: 'Gambit', strength: 136},
 ];
 const more = heroes.concat(extras);
 console.log(more)

 //JOIN                               JOIN
 function getName(hero) {
  return `${hero.name} : ${hero.strength}`;
 }
 const list = heroes
  .map(getName)
  .join('\n');
console.log(list)

//SOME                                SOME
function isHulk(hero) {
  return hero.name === 'Hulk';
 }
 const hulkIn = heroes.some(isHulk);
 console.log(hulkIn) //true

 //INCLUDES                           INCLUDES
 function getName(hero) {
  return hero.name;
 }
 const hulkIn2 = heroes
  .map(getName)
  .includes('Hulk');
console.log(hulkIn2) //true

//REDUCE  REDUCE  REDUCE  REDUCE  REDUCE  REDUCE  REDUCE
function sumStrength(total, hero) {
  //console.log(total, hero.strength)
  return total + hero.stength;
 }
 function sumStrLoop (arr){
   var sumTotal = 0;
   for(let i = 0; i < arr.length; i++){
     //console.log(arr[i].strength)
     sumTotal += arr[i].strength
   }
   return sumTotal
 }



console.log(sumStrLoop(heroes))

 const totalStength2 = heroes.reduce(
  sumStrength,
  0
 );

 //console.log(totalStength2)
// const strSum = heroes.reduce(function(total, hero){
//   console.log(total, hero.strength)
//   return total + hero.strength
// },0)
// console.log(strSum)
/*





















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



