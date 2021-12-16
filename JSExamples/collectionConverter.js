
//Toy Problem Solving Recipe

// Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).

//input array should have strings at even indexes ... every other item will become object.keys
//input array should have an even number of elements (lets just assume this to make things easy)
//input: collection - either array(even number of elements) or an Object
//output: array if input is object
//output: object if input is array


function collectionConverter(collection){
  //if the collection is an array true
  if(Array.isArray(collection)){
    //convert to obj
    var converted = convertToObj(collection);
      
  } else {
    //if not, convert to array
    var converted = convertToArr(collection);
  }
return converted;
//return the converted value

}

//convert to obj
//input: array
//output: object
function convertToObj(arr){
 //create object
 var obj = {};
 //loop through the array by twos
 for (var i = 0; i < arr.length; i+=2){
    //add key and value to object
    var key = arr[i];
    var value = arr[i+1];
    obj[key] = value;
 }
 //return object
 return obj;
}

//convert to array
//input : obj
//output: arr

function convertToArr(obj){
 //create arr
 var arr = [];
 //loop through my obj
 for (var key in obj){
   //push key and value to array
   var value = obj[key];
    //push key and value to array
   arr.push(key, value);

 };
  return arr;
 //return arr

}

var arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian'];

var objZoo = {
 zebra: 4,
 rhino: true,
 monkeys: 'many',
 tiger: 'siberian'
}

console.log(convertToArr(objZoo)); //['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']

console.log(convertToObj(arrZoo)); // { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian'}

console.log(collectionConverter(arrZoo)); // { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian'}

console.log(collectionConverter(objZoo)); // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']



// [
//   'zebra',   4,
//   'rhino',   true,
//   'monkeys', 'many',
//   'tiger',   'siberian'
// ]
// { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian' }
// { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian' }
// [
//   'zebra',   4,
//   'rhino',   true,
//   'monkeys', 'many',
//   'tiger',   'siberian'