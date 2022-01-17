
function makeBetweenFun (min, max) {
  return function(num){
    return num >= min && num <= max
  }
}

function isKid (age, min, max) {
  return makeBetweenFun (min, max)(age)
}

console.log(isKid(10, 0, 20))