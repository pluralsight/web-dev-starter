// Time limit 45 minutes
// Write a function isPrime that takes an integer (less than a billion) and returns true if the integer is prime and false if it is not
// https://en.wikipedia.org/wiki/Prime_number

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


console.log(isPrime(12))//;  //false
console.log(isPrime(13))//;  //true
console.log(isPrime(63))//;  //false
console.log(isPrime(67))//;  //true
console.log(isPrime(871))//; //false
console.log(isPrime(15485863))//;  //true
console.log(isPrime(15485869))//;  //false