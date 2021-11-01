let person = {
    name: "John",
    age: 32,
    partTime: false
};

console.log(person.name);


//Creating a new Array
let newValues = [  ];

//Initializing an Array (preferred method)
let values = [ 1, 2, 3 ];

//Another method 'call' for initializig an Array
//let anotherValues = Array.from(1, 2, 3);

//example array, with strings as elements
//Best practise to always use the same data type inside the array
const testingValues = [ 'a', 'b', 'c' ];
console.log(testingValues);

//How to see if a variable is an Array using below code:
console.log(Array.isArray(testingValues)); // comes up as true

// Accessing an array
console.log(testingValues[0]); //a
console.log(testingValues[1]); //b
console.log(testingValues[2]); //c

//Changing the individual index/element
testingValues[0] = 'aaa';
console.log(testingValues[0]);

//Push, adding a new index/value/element into an existing array
const pushValues = [ 'a', 'b', 'c' ];
pushValues.push('d');
console.log( pushValues ); // a , b , c , d

//Pop, remove the very last element off from an array
const popValues = [ 'a', 'b', 'c', 'd' ];
const last = popValues.pop();
console.log( last ); // d
console.log( popValues ); // a b c

//Shift - removes first element
//moves / shifts the array to the left
const shiftValues = [ 'a', 'b', 'c' ];
const shifted = shiftValues.shift();
console.log( shiftValues ); //b c
console.log( shifted ); // a

//Unshift - adds a new element as the new first element
// adds element to the left
const unshiftedValues = [ 'b', 'c' ];
unshiftedValues.unshift('a');
console.log(unshiftedValues); // a b c

//Slice - creates a new array using an existing array as reference

const oldValues = [ 'a', 'b', 'c' , 'd'];
const sliceValues = oldValues.slice(1, 3);
console.log( sliceValues );

function showName() {
    document.getElementById('name').innerText = 'Small Project given by Ryan';
}

showName();