var cardData = [
    {
      'issuer/network': 'Visa',  // card issuer (network)
      prefixes: ['4'],	       // beginning digits
      lengths: [13, 16, 19]      // lengths of card numbers
    },
    {
      'issuer/network': 'Mastercard',
      prefixes: ['51', '52', '53', '54', '55'],
      lengths: [16]
    },
    {
      'issuer/network': 'American Express',
      prefixes: ['34', '37'],
      lengths: [15]
    },
    {
      'issuer/network': 'Diner\'s Club',
      prefixes: ['38', '39'],
      lengths: [14]
    }
  ];
  
  function detectNetwork(str, arr) {
    // your solution here
    var accumulatorString = '';
    var firstTwoDigits = str.slice(0,2);
    
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].prefixes.length; j++){
        if(firstTwoDigits === arr[i].prefixes[j]){
          for(var k = 0; k < arr[i].lengths.length; k++){
            if(str.length === arr[i].lengths[k]){
              accumulatorString += arr[i]['issuer/network'];
            }
          }
        }
        
      }
      
    }
    return accumulatorString
  }
  
  // example
  //var network = detectNetwork('343456789012345', cardData);
  //var network = detectNetwork('38145874523548', cardData);
  var network = detectNetwork('5567676767676764', cardData);
  
  
  console.log(network); // --> 'American Express'  
    