var cardData = [
  {
    network: 'Switch',
    prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  },
  {
    network: 'Visa',
    prefixes: ['4'],
    lengths: [13, 16, 19]
  },
  {
    network: 'MasterCard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    network: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    network: 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  },
  {
    network: 'Discover',
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  },
  {
    network: 'Maestro',
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  },
  {
    network: 'China UnionPay',
    prefixes: [],
    lengths: [16, 17, 18, 19]
  }
];
​
for (var i = 622126; i <= 622925; i++) {
  cardData[7].prefixes.push(i.toString());
}
for (var i = 6282; i <= 6288; i++) {
  cardData[7].prefixes.push(i.toString());
}
for (var i = 624; i <= 626; i++) {
  cardData[7].prefixes.push(i.toString());
}
​
var detectNetwork = function(cardNumber) {
  var lengthCard = cardNumber.length;
  var nums = [cardNumber.slice(0, 1), cardNumber.slice(0, 2), cardNumber.slice(0, 3), cardNumber.slice(0, 4), cardNumber.slice(0, 6)]
  for (var i = 0; i < cardData.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        var preLen = cardData[i].prefixes.includes(nums[j]) && cardData[i].lengths.includes(lengthCard);
        if (preLen) {
          return cardData[i].network;
        }
    }

  }
};