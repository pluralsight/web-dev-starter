var canReach = function(a, n) {
  debugger
 let max = 0;
 let can = 0

 for ( let i = 0; i < a.length; i++ ) {
  if ( max < i ) { return can }
  max = Math.max(max, i + a[i]);
  if (max >= a.length - 1 ) { return can = 1}
 }
}

const a = [1, 2, 0, 3, 0, 0]
//const a = [1, 0, 2]
const num = 6
console.log(canReach(a, num))