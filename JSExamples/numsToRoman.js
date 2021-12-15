var numToRoman = function(num) {
    var romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    var roman = "";

    for (var key in romanValues) {
        //console.log(key, romanValues[key]);
        while (num >= romanValues[key]) {
            roman += key;
            num -= romanValues[key];
            console.log(roman);
        }
    }

    return roman;
};


// numToRoman(2021); //'MMXXI'
numToRoman(1999); //'MCMXCIX'
// numToRoman(4); //'IV'
// numToRoman(33) //'XXXIII'