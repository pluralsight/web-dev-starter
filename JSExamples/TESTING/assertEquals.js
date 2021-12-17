//Testing


//assertEqual
//
//three parameters
//actual - scalar value returned from function we are testing
//expected - theoretical result of calling your function
//testName - describe what a call to assertEqual is verifying

//compare strict equality



// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
  console.log(n * n)
}

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual (actual, expected, testname){
    if(actual !== expected){
        return `FAILED ${testname} Expected "${expected}"", but got "${actual}"`
    } else {
        return `passed`
    }
}
    

// TESTS CASES
//positive integer
var actual_1 = square(3);
var expected_1 = 9;
assertEqual(actual_1, expected_1, `should square a positive integer`)

//negative integer
var actual_2 = square(-4);
var expected_2 = 16;
assertEqual(actual_2, expected_2, `should square a negative integer`)

//input is 0
var actual_3 = square(0);
var expected_3 = 0;
assertEqual(actual_3, expected_3, `should square an input of zero`)

//input is a decimal
var actual_4 = square(1.25);
var expected_4 = 1.5625;
assertEqual(actual_4, expected_4, `should square a positive integer`)


console.log(assertEqual(square(5), 25,`it doubles 5 to 10`))
