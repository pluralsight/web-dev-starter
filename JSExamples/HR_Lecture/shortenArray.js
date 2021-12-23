function shortenArray(arr) {
    accumulatorArray = []
   for (var i = 0; i < arr.length; i ++){
      if(arr[i]){
        accumulatorArray.push(arr[i]); 
      }
    }
        
  return accumulatorArray;
  }
  
  var test1 = [1,2,3,4,,,,,];
  var test2 = [, , , , "a", true, 4, 4];
  var test3 = [1, , 2, , 3, , 4,];
  
 
// function assertArrayEqual(actual,expected, testName){
//     var isEqualLength = true;
//     if(actual.length !== expected.length){
//         isEqualLength = false;
//     }

//     var isEqualItems = true;
//     for(var i = 0; i< actual.length; i++){
//         if(actual[i] !== expected[i]){
//             isEqualItems = false;
//             break;
//         }
//     }
//     if(isEqualLength && isEqualItems){
//         console.log(`Passed`);
//     } else {
//         console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}`);
//     }
// }
function assertArrayEqual(actual, expected, testName){
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    if(actual === expected){
      console.log("passed");
    }else{
      console.log(`FAILED! `);
    }
  }
actual1 = shortenArray(test1);
expected1 = [1,2,3,4];
assertArrayEqual(actual1, expected1, 'both arrays should be equal');

actual2 = shortenArray(test2);
expected2 = ["a", true, 4, 4];
assertArrayEqual(actual2, expected2, 'both arrays should be equal');

actual3 = shortenArray(test3);
expected3 = [1,2,3,4];
assertArrayEqual(actual3, expected3, 'both arrays should be equal');