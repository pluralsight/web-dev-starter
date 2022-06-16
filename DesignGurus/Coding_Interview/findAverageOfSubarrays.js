function find_averages_of_subarrays(K, arr) {
  debugger
  const accArr = []
  let sum = 0

  for ( let i = 0; i < arr.length - K; i++ ) {
    for (let j = i; j < K + i; j++ ) {
      sum += arr[j]
    }
    accArr.push(sum/K)
    sum = 0;
  }
  return accArr
}
//2.2,2.8,2.4,3.6,2.8

function find_averages_of_subarrays(K, arr) {
  debugger
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, no need to slide if we've not hit the window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
