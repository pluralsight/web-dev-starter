var address = {
    number: 123,
    street: 'Fake St.',
    city: 'Springfield',
    state: 'QX',
    zipcode: 99999
  };
  var newAddressObj = {}
  delete address['state']
  var keysInAddress = Object.keys(address); //['number', 'street', 'city', 'zipcode']
  var valuesInAddress = Object.values(address); //[123, 'Fake St.', 'Springfield', 'QX', 99999]
  var newArray = ['a', 'b', 'c', 'd', 'e']
  //console.log('test', address[keysInAddress[1]]) //Fake St.
  for(var i = 0; i < keysInAddress.length; i++){
    newAddressObj[newArray[i]] = valuesInAddress[i];
   //address[keysInAddress[i]] = address[newArray[i]]
    //console.log('values', valuesInAddress[i])
    //console.log('newAddressObj', newAddressObj)
  }
  //address = newAddressObj
  //console.log('an array of the address object\'s keys:', Object.keys);
  //console.log('Values in array Object.values(address):', valuesInAddress);
  console.log('address object', address);
  console.log('newAddres object', newAddressObj)
  
  