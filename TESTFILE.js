function flipPairs (str) {
    accumulatorStr = '';

    for(var i = 0; i < str.length; i += 2) {
        var stringSlice = str.slice(i, i + 2)
        var reverseChar = stringSlice.split('').reverse().join('');
        accumulatorStr += reverseChar
    }
return accumulatorStr;
}
