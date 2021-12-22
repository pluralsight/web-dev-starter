// Your current client is a casino that needs you to fix their Black-Jack card counting program. The function should take an array of objects, each object is a card that was dealt and its value is the number on the card.

// The way card counting works is that each card has a _weighted_ value. Cards 2 through 6 are worth one point; 7, 8 and 9 are worth zero; and 10s, face cards and Aces are worth negative one. This type of card-counting system is called the _HiLo_ count. When counting down a standard deck of 52 cards, you'll notice the count will go up and down, and always end at zero if you counted correctly.

// The `cardCounter` function is supposed to take an array of card objects and return the count (weighted value) of the cards. It doesn't seem to be producing accurate results, see if you can fix it before the card-sharks beat the house!

function cardCounter(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        var card = array[i];
        //console.log('card', card)

        if (card['card ' + i] >= 2 && card['card ' +i] <= 6) {
          
            count++;
        } else if (card['card ' + i] >= 10 || card['card ' + i] === 'face or ace') {
            count--;
        }
        //console.log('count', count)
        
    }
    
  return count;  
}

function assertEquals(actual, expected, testDescription) {
    if (actual !== expected) {
        console.log('Test failed:', testDescription);
        return;
    }
    console.log('test passed');
    return;
}

var dealtCards = [ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];

var actual = cardCounter(dealtCards);
var expected = 1;
assertEquals(actual, expected, 'function should return correct HiLo count.');

var dealtCards2 = [ { 'card 0': 'face or ace' }, { 'card 1': 9 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];

var actual2 = cardCounter(dealtCards2);
var expected2 = -2;
assertEquals(actual2, expected2, 'function should return correct HiLo count.');
