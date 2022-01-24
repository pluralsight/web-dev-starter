
//LOOK IN coffee.js   possibly from extra problems from Matt for TAA
//Gil provided
// HR_Lecture => Extra TAA problems => set1.js

var allStars = [{
  name: "Dwyane Wade",
  pointsPerGame: 23.7,
  assistsPerGame: 5.8,
  reboundsPerGame: 4.8
}, {
  name: "Kyle Lowry",
  pointsPerGame: 13.5,
  assistsPerGame: 5.7,
  reboundsPerGame: 4.0
}, {
  name: "LeBron James",
  pointsPerGame: 27.2,
  assistsPerGame: 6.9,
  reboundsPerGame: 7.2
}, {
  name: "Paul George",
  pointsPerGame: 16.9,
  assistsPerGame: 3.1,
  reboundsPerGame: 6.2
}, {
  name: "Carmelo Anthony",
  pointsPerGame: 24.9,
  assistsPerGame: 3.2,
  reboundsPerGame: 6.6
}, {
  name: "Stephen Curry",
  pointsPerGame: 22.4,
  assistsPerGame: 6.9,
  reboundsPerGame: 4.3
}, {
  name: "Russell Westbrook",
  pointsPerGame: 21.5,
  assistsPerGame: 2.6,
  reboundsPerGame: 5.6
}, {
  name: "Kobe Bryant",
  pointsPerGame: 25.0,
  assistsPerGame: 4.7,
  reboundsPerGame: 5.2
}, {
  name: "Kevin Durant",
  pointsPerGame: 25.6,
  assistsPerGame: 2.9,
  reboundsPerGame: 5.6
}, {
  name: "Kawhi Leonard",
  pointsPerGame: 14.3,
  assistsPerGame: 2.0,
  reboundsPerGame: 6.3
}
]
/*
A) Your scouting manager only wants you to pay attention to players who score at
least 20 points per game. Create a function that returns an array of player names
who fit this description.
*/
var highScore = allStars.filter(function(el){
  if(el.pointsPerGame >= 20){
    return el
  }
}).map(function(el){
  return {
    [el.name] : (el.pointsPerGame)  //[{LeBron James: 27.2},{Kobe Bryant: 25},{Kevin Durant: 25.6}]
  }
}).map(function(el){
  return Object.keys(el)
}).flat().join(', ')


console.log(highScore) //'Dwyane Wade,LeBron James,Carmelo Anthony,Stephen Curry,Russell Westbrook,Kobe Bryant,Kevin Durant'

var highScoringPlayers = function(players){

}
/*
B) Right now your function looks for only players with 20 points per game.
Modify your function such that it takes in a target number and filters
accordingly.

sorting function
*/

var highScoringPlayers = function(arr, num){
   return arr.sort(function(a,b){
    return (b.pointsPerGame - a.pointsPerGame)
  }).filter(function(el){
     //return sortHelper(el.pointsPerGame, num)
     return el.pointsPerGame > num
   }).map(function(el){
     return el
   }).map(function(el){
     return el.name
   })
}

console.log(highScoringPlayers(allStars, 13)); //returns a list of all-stars who get an
//average of at least 13 points per game.



/*
C) Modify your function to take in a third argument that indicates which
property you are interested in, and returns a filtered array based on this.
*/
var myFilteredArray = function (arr, pts, as){
  return arr.sort(function(a, b){
    return b.pointsPerGame - a.pointsPerGame;
  }).filter(function(el){
    if(el.pointsPerGame > pts && el.assistsPerGame > as){
      return el
    }
  }).map(function(el){
    return el.name
  }).join(', ')
}

console.log(myFilteredArray(allStars, 13, 6))
