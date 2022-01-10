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
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//   console.log(companies[i])
// }

//forEach
accArr = [];
companies.forEach(function(comp) {
  //console.log(comp)
  if(comp.category === 'Retail' && comp.start > 1981){
    accArr.push(comp)
  }
  // accArr.push(comp)
  // console.log(accArr)
  // console.log(comp)
});
//console.log(accArr)



//filter
//let accArrFilter = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     accArrFilter.push(ages[i])
//   }
// }
// console.log(accArrFilter)
const accArrFilter = ages.filter(function(a){
  // if(a >= 21){
  //   return true;
  return (a >= 21)
  
});
//console.log(accArrFilter)

const retailCompanies = companies.filter(function(c){
  return (c.category === 'Retail')
});

//console.log(retailCompanies)

const eightiesCompanies = companies.filter(function(c){
  if(c.start > 1979 && c.start < 1990){
    return true
  }
});
//console.log(eightiesCompanies)

const tenYearComp = companies.filter(function(c){
  return (c.end - c.start >= 10)
});
//console.log(tenYearComp)


//map
const compNames = companies.map(function(c){
  return ([`Company: ${c.name}, Years in Business: ${(c.end - c.start)}`]);
});
console.log(compNames)






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



