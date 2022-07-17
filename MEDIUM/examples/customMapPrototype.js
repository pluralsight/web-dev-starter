Array.prototype.myMap = function (callback) {
  debugger
  let result = []

  for (let i = 0; i < this.length; i++ ) {
    result.push(callback( this[i], i, callback ))
  }

  return result

}


var funFunc = function (num, index, callback) {
  console.log("index", index)
  console.log('callback', callback)
return num * 2
}

const test = [1, 2, 3, 4, 5]
var someNewArray = test.myMap(funFunc)
console.log(someNewArray)
