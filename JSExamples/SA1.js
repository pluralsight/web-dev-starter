// Exercise 1 (booleans and conditionals)
// Write a function wasItFunny which takes in a boolean argument (input value), and returns "meh" if the input was false, and "HAHAHA" if the input was true.

//input: response - boolean
//output: answer - string

function wasItFunny(response) {
    if(response) {
      return "HAHAHA";
    } else {
      return 'meh';
    }
  }
  // Calling your function should result in:
  
  wasItFunny(true); //"HAHAHA"
  wasItFunny(false); //"meh"
  
  // Exercise 2 (strings and conditionals)
  // Write a function isWordLong which takes in a string argument (input value), and returns true if the string is longer than 15 characters, and false if the string is less than or equal to 15 characters. You can assume that the input string will only contain letters.
  
  //input: word - string - only letters
  //output: isLong - boolean
  
  function isWordLong(word) {
    return word.length > 15;
  }
  // Calling your function should result in:
  
  isWordLong('absentmindedness'); //true
  isWordLong('aerodynamics'); //false
  
  
  // Exercise 3 (numbers)
  // Write a function addFourNums which takes in four number arguments (input values) and returns the value of the numbers added to each other
  
  //input: numA - number, numB - number, numC - number, numD - number
  //output: sum - number
  function addFourNums(numA, numB, numC, numD) {
    return numA + numB + numC + numD;
  }
  // Calling your function should result in:
  
  addFourNums(10, 20, 30, 40); //100
  
  // Exercise 4 (arrays)
  // Write a function addOnlyFirstFourNums which takes in an array argument (input value) and returns the value of only the first four numbers added to each other. You can assume that the input array will always have at least 4 numbers, and will only have number values.
  
  //input: numbers - array of numbers
  // output: sum - number
  function addOnlyFirstFourNums(numbers) {
    return numbers[0] + numbers[1] + numbers[2] + numbers[3];
  }
  // Calling your function should result in:
  
  addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90]); //8642
  
  // Exercise 5 (numbers)
  // Write a function convertInchesToCentimeters which takes in a number argument (input value), inches, and returns the calculation of that number multiplied by precisely 2.54*
  
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
  //input: inches - number
  //output: cms - number
  function convertInchesToCentimeters(inches) {
    return inches * 2.54;
  }
  // Calling your function should result in:
  
  convertInchesToCentimeters(120); //304.8
  // * - Why 2.54? This is the standard calculation of inches to centimeters -- 1 inch == 2.54 centimeters
  
  // Exercise 6 (objects)
  // Write a function myFavoriteSong which takes in no arguments (input values), but returns an object with the properties title, artist, and durationInSeconds. The values of each property is up to you, and you can explicitly type out these values, but these three properties should exist within the object your function returns.
  
  //input: no input
  //output: song - obj - title: string, artist: string, durationInSeconds: number
  function myFavoriteSong() {
    return {
      title: "Countdown",
      artist: "Beyonce",
      durationInSeconds: 212}
  }
  // Calling your function should result in something like:
  
  // myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}
  
  // Exercise 7 (objects and conditionals)
  // Write a function isItExpensive which takes in an object argument (input value). You can assume this object always has a price property. Your function should behave as follows: it should check the value of price.
  
  // If that value is less than 100, return false.
  // If the value is greater than or equal to 100, return true.
  // However, if the value is null, return the string "no data".
  // input: item - obj - price: number or null
  //output: expensive? - boolean or string "no data"
  
  function isItExpensive(item) {
    if (item.price === null) {
      return "no data";
    }
    return item.price >= 100;
  }
  // Calling your function should result in something like:
  
  var appleWatch = {price: 400}
  var applesAndWatches = {price: 30}
  var watchingApples = {price: null}
  
  isItExpensive(appleWatch); //true
  isItExpensive(applesAndWatches); //false
  isItExpensive(watchingApples); //"no data"
  
  // Exercise 8 (strings and parameters)
  // Write a function introduceMe which takes in 2 arguments (input values): a string and a number. The function should return a string excitedly saying your name and how many pets you currently have.
  
  // input: name - string, numPets - number
  // output: excited response - string
  function introduceMe(name, numPets) {
    return "Hi I am " + name + " and I have " + numPets + " pet(s)";
  }
  // Calling your function should result in something like:
  
  introduceMe("Alex", 2); //"Hi I am Alex and I have 2 pet(s)"
  introduceMe("Sam", 0); //"Hi I am Sam and I have 0 pet(s)"
  
  // Exercise 9 (arrays and strings)
  // Write a function nextTwoBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the one after that.
  
  //input: timesArr - array of numbers
  //output: next2 - string
  function nextTwoBusTimes(timesArr) {
    return "The next 2 busses arrive in " + timesArr[0] + " and " + timesArr[1] + " minutes.";
  }
  // Calling your function should result in something like:
  
  var bus10Schedule = [12, 24, 35, 47, 60];
  nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."
  
  // Exercise 10 (arrays and strings)
  // Write a function nextAndLastBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the last for the day.
  
  // input: timesArr - array of numbers
  //output: nestandlast - string
  function nextAndLastBusTimes(timesArr) {
    return "The next bus is in " + timesArr[0] + " minutes. The last bus is in " + timesArr[timesArr.length - 1] + " minutes.";
  }
  // Calling your function should result in something like:
  
  var bus10Schedule = [12, 24, 35, 47, 60];
  nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."
  
  // Exercise 1
  // Write a function convertTo which takes in a string and a number.
  
  // If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
  // If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
  // input: units - string, num - number
  // output: converted - number
  
  function convertTo(units, num) {
    if(units === 'cm') {
      return num * 2.54;
    } else {
      return num / 2.54;
    }
  }
  // Calling your function should result in something like:
  
  convertTo('cm', 100); //254
  convertTo('in', 50.8); //20
  
  
  // Exercise 2
  // Write a function displayBusTimes which takes in an object and a string. The object is the collection of bus time schedules, and the string will be the bus line the user's interested in. See below:
  
  var cityZBusSchedules = {
    bus12Schedule: [9, 18, 27, 36],
    bus15Schedule: [11, 22, 33, 44],
    bus22Schedule: [15, 30, 45]
  };
  // Your function should output a string with the times the user is interested in.
  
  // input: buschedule - obj - busXXSchedule: array of numbers, ..., busLine - string(key)
  // output: bustimes - string
  function displayBusTimes(busScheduleObj, busLine) {
    return "The bus will arrive in the next [" + busScheduleObj[busLine] + "] minutes."
  }
  // Calling your function should result in something like:
  
  displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."
  // Of course, depending on the input value, it should output correct values..
  
  displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."
  
  // Exercise 3
  // Write a function addGenre which takes in an object and a string. This function will add a property "genre", and assign to it the input string
  
  // input: song - obj, genre - string
  // output: no return value, add genre prop to song
  
  function addGenre(song, genre) {
    song["genre"] = genre;
  }
  // Calling your function should result in something like:
  
  var favoriteSong = {title: "Countdown", artist: "Beyonce", durationInSeconds: 212};
  
  addGenre(favoriteSong, "Contemporary R&B");
  
  console.log(favoriteSong); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212, genre: "Contemporary R&B"};
  
  
  // Exercise 4
  // You are a busy executive, and refuse to read more than 15 characters of any email. Complete the function executiveSummary which takes in an email (string) and returns the first 15 characters of that string. If the email is less than 15 characters long, return the entire email.
  
  // input: email - string
  // output: summary - string
  
  function executiveSummary(email) {
    return email.slice(0, 15);
  }
  executiveSummary('URGENT: the lobby is rapidly filling up with popcorn. We cannot locate where the popcorn is coming from. Send help.');
  // The call above should output the string: 'URGENT: the lob'
  
  executiveSummary('URGreat!!!');
  // The call above should output the string: 'URGreat!!!'
  
  // Exercise 5
  // Write a function called removePartyKillers that takes in an array like "playlist" (see below) and returns a copy of that playlist where any song longer than 8 minutes has been removed. You can safely assume that a playlist is an array of objects. Each object will have the properties title, artist, and durationInSeconds.
  
  var awesomePlaylist = [
    {
      title: "Hay Day",
      artist: "Robo-Crop",
      durationInSeconds: 378
    }, {
      title: "10,000 Pounds",
      artist: "L-Ton Jonn",
      durationInSeconds: 498,
    }, {
      title: "Caesar's Salad",
      artist: "DJ Dinner Julius",
      durationInSeconds: 600,
    }, {
      title: "The British Are On Their Way",
      artist: "Raul Pevere",
      durationInSeconds: 1095,
    }, {
      title: "13th",
      artist: "The Doctors",
      durationInSeconds: 185,
    }
  ];
  
  // input: playlist - array of songs - obj - title: string, artist: string, durationInSeconds - number
  // output: party songs - array of songs
  function removePartyKillers(playlist) {
    var partySongs = [];
    for(var i = 0; i < playlist.length; i++) {
      var song = playlist[i];
      if (song.durationInSeconds <= (60 * 8)) {
        partySongs.push(song);
      }
    }
    return partySongs;
  }
  removePartyKillers(awesomePlaylist);
  // Would return:
  
  // [
  //   {
  //     title: "Hay Day",
  //     artist: "Robo-Crop",
  //     durationInSeconds: 378
  //   }, {
  //     title: "13th",
  //     artist: "The Doctors",
  //     durationInSeconds: 185,
  //   }
  // ]
  // Exercise 6
  // Write a function onlyPayForHealthyThings, which takes in an array of objects.
  
  // Each object is a grocery item with the following properties: name, nutritionalValue, price.
  // The nutritionalValue is also an object, which has the following properties: lowSugar, lowSodium
  // Your function should add the prices of all the items in the array if the item is true for both lowSugar and lowSodium
  
  // Finally, your function should return the sum total of all the healthy items
  //input: foodList - array of food items 
    // - obj - name: string,
            // nutritionalValue : obj - lowSugar: boolean,
            //                          lowSodium: boolean
            // price: number
  //output: cost - number
  
  function onlyPayForHealthyThings(foodList) {
    var cost = 0;
    for (var i =0; i < foodList.length; i++) {
      var food = foodList[i];
      var healthy = food.nutritionalValue.lowSugar && food.nutritionalValue.lowSodium;
      if (healthy) {
        cost += food.price;
      }
    }
    return cost;
  }
  var myCart = [ 
    { name: 'chips',
      nutritionalValue: { lowSugar: true, lowSodium: false },
      price: 0.75 },
    { name: 'carrots',
      nutritionalValue: { lowSugar: true, lowSodium: true },
      price: 1.5 },
    { name: 'cookies',
      nutritionalValue: { lowSugar: false, lowSodium: true },
      price: 2.5 },
    { name: 'apples',
      nutritionalValue: { lowSugar: true, lowSodium: true },
      price: 0.6 },
    { name: 'soda',
      nutritionalValue: { lowSugar: false, lowSodium: true },
      price: 1.1 },
    { name: 'avocados',
      nutritionalValue: { lowSugar: true, lowSodium: true },
      price: 0.75 } 
    ];
  // Calling onlyPayForHealthyThings(myCart) should return 2.85 from adding the prices of "carrots", "apples", and "avocados"
  onlyPayForHealthyThings(myCart)