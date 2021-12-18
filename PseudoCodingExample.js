//PseudoCodingExample.js

//I
  //town arr with restaurant objects
    //name - string
    //rating - number 0 - 100
//O
  //rating object
    //best - string
    //good - array of strings (90+ rating)
    //avg - num



    var myTown = [
        {
            name : "Brunch Spot",
            rating : 91
        },
        {
            name : "Burger Joint",
            rating : 78
        },
        {
            name : "Cold Soups Only",
            rating : 58
        },
        {
            name : "Pizza Party",
            rating : 95
        },
        {
            name : "Sandwich Deli",
            rating : 82
        }
    ];



function restaurantRating (town){
    var ratingsObj = {}
    //get the best rest
    //get all the good rest
    //get the average rating of rest
    
//for each rest
  //compare each with current best
  //check to see if rest is 90+
  //add current rating to a sum
  
//create properties for our ratingObj, best, good average
  
var best = town[0]
var good = []
var ratings = 0;

for (var i = 0; i < town.length; i++){
    if(best.rating < town[i].rating){
        best = town[i]
    }
    if(town[i].rating >= 90){
        good.push(town[i].name)
    }
    ratings += town[i].rating
}
ratingsObj.best = best.name;
ratingsObj.good = good;
ratingsObj.avg = ratings/town.length

return ratingsObj;

}



var result = restaurantRating(myTown);
console.log (result)
// {
//     best : "Pizza Party",
//     good : ["Brunch Spot", "Pizza Party"],
//     avg : 80.8

// }


function assertEqual(actual, expected, testName){
    if(actuall === expected){
        console.log('Passed')
    } else {
        console.log(`Failed ${testName} Expected ${expected} but got ${actual}`)
    }
}
