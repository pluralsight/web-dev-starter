//option 1

function validAnagram (first, second) {
  if ( first.length !== second.length ) { return false }

  const obj1 = {}
  const obj2 = {}
  for ( let i = 0; i < first.length; i++ ) {
    obj1[first[i]] = ( obj1[first[i]] || 0 ) + 1
    obj2[second[i]] = ( obj2[second[i]] || 0 ) + 1
  }

  for ( let letter in obj1 ) {
   if ( !(letter in obj2)) { return false}
   if ( obj1[letter] !== obj2[letter]) {return false}
  }
  return true
}


//option 2

function validAnagram (first, second) {

  if ( first.length !== second.length ) { return false }

  let obj = {}
  for ( let i = 0; i < first.length; i++ ) {
    obj[first[i]] = ( obj[first[i]] || 0 ) + 1
  }
  debugger
  for ( let j = 0; j < second.length; j++ ) {
    if (!(obj[second[j]])) {
      return false
    }
    obj[second[j]]--
  }

  for ( let letter in obj ) {
    if ( obj[letter] !== 0 ) {
      return false
    }
  }
  return true

}


console.log(validAnagram('anagram', 'margana'))
