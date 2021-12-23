
var users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ];
  
  
  var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
  
  //id is odd
    //add user's email
  //id is even
    //
    //your function should create a new string 
    //for the given user, add the street, suite,
    // city, and zipcode, each separated by a space 
    //and a comma, as one string, to the return array
  
    function generateSampleView (arr) {
      var accumArray = [];
  
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]['id'] % 2 === 0) {
          var evenInfo = evenObjInfo(arr[i]);
          accumArray.push(evenInfo);
        } else {
          var oddInfo = oddObjInfo(arr[i])
          accumArray.push(oddInfo);
          }
      }
    return accumArray;
    }
  
  
    function oddObjInfo (obj) {
      return `${obj.email}`
    }
  
    function evenObjInfo (obj) {
      return `${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, ${obj.address.zipcode}`
    }
  
    //console.log(generateSampleView(users))
  
    function assertArrayEqual (actual, expected, testName) {
      var isEqualLength = true;
      if(actual.length !== expected.length){
        isEqualLength = false
      }
  
      var isEqualValue = true
      for(var i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
          isEqualValue = false
        }
      }
      if (isEqualLength && isEqualValue) {
        console.log(`passed`)
      } else {
        console.log(`failed ${testName} Expected ${expected} but got ${actual}`)
      }
    }
  
    actual1 = generateSampleView(users)
    expected1 = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
    assertArrayEqual(actual1, expected1, 'both arrays should be equal')
  