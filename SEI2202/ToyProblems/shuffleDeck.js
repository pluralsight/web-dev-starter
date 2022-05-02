var shuffleDeck = function(deck) {
  //debugger

    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var copyValues = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ]
    //var deck = [];
    var shufDeck = [];

    var ran;
    // suits.forEach(function(suit) {
    //   // values.forEach(function(value) {
    //   // for (var i = 0; i < values.length; i++) {
    //   while(values.length) {
    //     ran = Math.floor(Math.random() * (values.length))
    //     deck.push(values[ran] + suit);
    //     values.splice(ran, 1)
    //   };
    //   copyValues.forEach(function(el) {
    //     values.push(el)
    //   })

    // });

    while(deck.length) {
      ran = Math.floor(Math.random() * (deck.length))
      shufDeck.push(deck[ran])
      deck.splice(ran, 1)
    }

    while(shufDeck.length) {
      ran = Math.floor(Math.random() * (shufDeck.length))
      deck.push(shufDeck[ran])
      shufDeck.splice(ran, 1)
    }

    return deck;

  };
  console.log(shuffleDeck(['A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦']))

  // Ordered deck generator provided for your testing convenience
  // (You may alter this function, but an unaltered copy will be used for tests.)
  var orderedDeck = function() {
    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var deck = [];

    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });

    return deck;
  };

  console.log(orderedDeck())

