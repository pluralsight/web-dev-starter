function afterNYears(names, n) {
    n = Math.abs(n);
    objCollector = {}
    console.log('names',names)
    for (var keys in names){
        //names[keys] = (names[keys]+n)
        objCollector[keys] = (names[keys]+n)
        
    }
	//console.log(objCollector)// names;
    return objCollector
}



function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if(actual === expected) {
        console.log(`Passed`);
    }else {
        console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}`);
    }
}




var people = ({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  } );
  
  /*
  {
    "Joel" : 33,
    "Fred" : 45,
    "Reginald" : 66,
    "Susan" : 34,
    "Julian" : 14
  }
  */
 
  var years = 1;
  console.log(afterNYears(people , years))
  console.log(afterNYears(people , years))

  var actual1 = afterNYears(people, years);
  var expected1 = {
    "Joel": 33,
    "Fred": 45,
    "Reginald": 66,
    "Susan": 34,
    "Julian": 14
};
assertObjectsEqual (actual1, expected1, 'increases the age of each person by n years')