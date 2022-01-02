/*
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
*/

function mapping(letters) {
    //first letter will be object key
    //object key will be letter to upper case

    //create accumulator object
    var accumulatorObject = {};
    for (var i = 0; i < letters.length; i++) {
        accumulatorObject[letters[i]] = letters[i].toUpperCase();
    }
	return accumulatorObject;
}

var letterArray = ["p", "s"]
console.log(mapping(letterArray))

var letterArray1 = ["a", "v", "y", "z"]
console.log(mapping(letterArray1))

var letterArray2 = []
console.log(mapping(letterArray2))



function assertObjectEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if(actual === expected) {
        console.log(`Passed`)
    } else {
        console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
    }
}

//test cases
var expected = {p: 'P', s: 'S'}
var expected1 = {a: 'A', v: 'V', y: 'Y', z: 'Z'}
var expected2 = {}
assertObjectEqual(mapping(letterArray), expected, `should have matching lower and upper case letters`)
assertObjectEqual(mapping(letterArray1), expected1, `should have matching lower and upper case letters`)
assertObjectEqual(mapping(letterArray2), expected2, `empty object should return empty object`)
