function fizzbuzz() {
  let str
   for ( let i = 1; i <= 100; i++ ) {
     str = ''
     if ( i % 3 === 0 ) {str += "fizz"}
     if ( i % 5 === 0 ) {str += "buzz"}
     console.log(str.length > 0 ? str : i)
   }
 }
 fizzbuzz()