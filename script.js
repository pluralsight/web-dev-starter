function flipPairs (str) {
    accumulatorStr = '';

    for(var i = 0; i < str.length; i += 2) {
        var stringSlice = str.slice(i, i + 2)
        var reverseChar = stringSlice.split('').reverse().join('');
        accumulatorStr += reverseChar
    }
return accumulatorStr;
}








var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var input = 'WNINFPEVCG'
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function assertEquals(actual, expected, testName){
    if(actual === expected) {
        console.log(`Passed`)
    } else {
        console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
    }
}

actual1 = flipPairs(input)
expected1 = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
assertEquals(actual1, expected1, 'should flip every pair of characters in string')