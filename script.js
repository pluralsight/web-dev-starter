function addFullNameProp(obj) {
  //var firstName = obj['firstName'];
  //var lastName = obj['lastName'];

  //if (firstName && lastName) {
    //obj['fullName'] = firstName + ' ' + lastName;
    obj['fullName'] = `${obj.firstName} ${obj.lastName}`
  //}

  return obj;
}

function assertObjectsEqual (actual, expected, testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if(actual === expected){
    return  `passed`;
  } else {
    return `Failed [${testName}] Expected ${expected}, but got ${actual}`
  }

}


var person = {
  firstName: 'Cassidy',
  lastName: 'Jacobs'
};
var actual = addFullNameProp(person);

var expected = {
  firstName: 'Cassidy',
  lastName: 'Jacobs',
  fullName: 'Cassidy Jacobs'
};



var output = assertObjectsEqual(actual, expected, "updates person's existing first name field")
// console output:
// passed
console.log('output', output);