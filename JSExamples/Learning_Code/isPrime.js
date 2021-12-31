function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        //console.log(element);
  
        return false;
      }
    }
    return element > 1;
  }
  
  // console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  // console.log([4, 5, 8, 12, 13].find(isPrime)); // 5
  
  
function listAllPrimes () {
  for(let i = 0; i < 1000000; i++){
    if(isPrime([i])){
      console.log(i)
    }
  }
}
listAllPrimes()

