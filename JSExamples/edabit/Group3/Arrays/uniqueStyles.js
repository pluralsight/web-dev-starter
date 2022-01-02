function uniqueStyles(arr){
    arr = cleanArr(arr)
    var str = arr.join(' ')
    console.log(arr)
    console.log(str)
    // console.log(str.split(/[ ,]+/))
    // cleanArr = str.split(/[ ,]+/)
    var sum = arr.length
  
    //sum variable set to arr length
    //iterate arr
      //if indexof word !== -1
        //sum minus one
    //return sum
    var chars = arr[0].slice(0,3)
    arr.splice(0,1)
  
    while ( arr.length > 0) {
      if(arr.join(' ').indexOf(chars) !== -1){
        chars = arr[0].slice(0,3)
        arr.splice(0,1)
        sum--
      } else {
        chars = arr[0].slice(0,3)
        arr.splice(0,1)
      }
      
    }
  return sum;
  }
  
  function cleanArr (arr) {
    console.log(arr)
    var accArr = []
    var fixedArr = []
    for(let word of arr){
      accArr.push(word.split(','))
    }
    while(accArr.length > 0){
      fixedArr = fixedArr.concat(accArr[0])
      accArr.splice(0,1)
    }
  return fixedArr
  }
  
  
  
  
  var result = uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
  ])// ➞ 7
  
  /*
  var result2 = uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
  ])// ➞ 9
  */
  console.log(result)
  
  