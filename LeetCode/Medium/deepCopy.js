let obj = {
  firstName : "Bob",
  lastName : "Smith",
  kids: ['joey', 'sammy', 'billy'],
  address : {
    street: "Mountain View Ave",
    number: 29,
    city: 'Avon',
    state: 'Connecticut',
    zip: '06001',
  }
}

let deepCopy = function (obj) {

  let copyObj = {}

  for ( let key in obj ) {
    if ( typeof obj[key] === "object" ) {
      deepCopy(obj[key])
    }
    copyObj[key] = obj[key]
  }
  return copyObj
}
//let copyObj = deepCopy(obj)
//console.log(JSON.stringify(copyObj) === JSON.stringify(obj))
