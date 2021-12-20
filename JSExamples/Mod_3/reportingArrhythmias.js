function diagnoseRates(data) {

    var patients = [];
    var lowHR = 'Bradycardia: ';
    var highHR = 'Tachycardia: ';
    
  
    for (var i = 0; i < data.length; i++) {
      var currentPatient = data[i];
        if (currentPatient < 60) {
            patients.push(lowHR + currentPatient);
        } else if (currentPatient > 100) {
            patients.push(highHR + currentPatient)
        } else patients.push('Normal: ' + currentPatient);
        
    }
    return patients;
  }
  
  function assertEqualArrays(array1, array2, testName) {
    if(JSON.stringify(array1) === JSON.stringify(array2)) {
        console.log('passed');
    } else {
        console.log('test failed: ' + testName);
    }
  }
  
  var heartRates = [63, 117, 52, 121, 67, 43];
  var actual = diagnoseRates(heartRates);
  var expected = [
    'Normal: 63',
    'Tachycardia: 117',
    'Bradycardia: 52',
    'Tachycardia: 121',
    'Normal: 67',
    'Bradycardia: 43'
  ];
  assertEqualArrays(actual, expected, 'function should return correct heartrates and diagnoses');
  
  var heartRates2 = [161, 90, 65, 45, 101, 59];
  var actual2 = diagnoseRates(heartRates2);
  var expected2 = [
    'Tachycardia: 161',
    'Normal: 90',
    'Normal: 65',
    'Bradycardia: 45',
    'Tachycardia: 101',
    'Bradycardia: 59'
  ];
  assertEqualArrays(actual2, expected2, 'function should return correct heartrates and diagnoses');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  