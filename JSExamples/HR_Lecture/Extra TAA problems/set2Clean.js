// //1) Warehouse Bins

// /*
//   Given an object of empty bins (arrays) and an array of items with their type (items), move the item name to the correct bin based on the type. You can assume the type of item will always have a corresponding bin.

//   ****Do not harcode check the bin names and do not loop over the objects
//  */

// var unsortedItems = [
//   {item: 'desk', type: 'homegoods'},
//   {item: 'lamp', type: 'homegoods'},
//   {item: 'laptop', type: 'electronics'},
//   {item: 'moisturizer', type: 'skincare'},
//   {item: 'towel', type: 'homegoods'},
//   {item: 'mouse', type: 'electronics'},
//   {item: 'sunscreen', type: 'skincare'},
//   {item: 'bed frame', type: 'homegoods'}
// ]

var binNames = {
  homegoods: [],
  electronics: [],
  skincare: [],
};

function warehouseBins(items, bins) {

}

console.log(warehouseBins(unsortedItems, binNames)); // ==>
/*
  {
    homegoods: ['desk', 'lamp', 'towel', 'bed frame'],
    electronics: ['laptop', 'mouse'],
    skincare: ['moisturizer', 'sunscreen'],
  }
*/


//2) How many treats

/* A dog is being trained to fetch the paper. When the dog takes the right action, the dog receives a treat. Otherwise, the dog reeives nothing.

Given an array of days the dog attempted to fetch the paper, return how many times the dog received a treat. You know the dog performed the correct action when the description says 'brought the paper.'
*/

// var attempts = [
//   {day: 'Monday', action: 'ran around the yard'},
//   {day: 'Tuesday', action: 'barked at strangers'},
//   {day: 'Wednesday', action: 'brought the paper'},
//   {day: 'Thursday', action: 'dug a hole'},
//   {day: 'Friday', action: 'brought the paper'},
//   {day: 'Saturday', action: 'brought the paper'},
//   {day: 'Sunday', action: 'went to sleep'},
// ]

function howManyTreats(arr) {

}

console.log(howManyTreats(attempts)); //==> 3


//3) Destroy the Robot

/*
There are killer robots on the loose! And they look like all the other robots. There is only one way to tell the robots apart: by what they say.
All robots speak in 'beep' and 'boop'. A killer robot will always speak in a string that contains beeps or boops in multiples of 4, while a non-killer robot will never speak with both 'beeps' and 'boops' in multiples of four.

Given a an array of robots and their strings, find the killer robots! Return a array of true and false. True marks a killer robot and false marks a normal robot.
 */

var robotTalk = [
  {str: 'boop beep boop'},
  {str: 'boop boop beep beep boop boop beep beep'},
  {str: 'beep beep beep beep boop boop boop'},
  {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
  {str: 'boop beep boop beep boop'},
  {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
]

function killerRobots(arr) {

}

console.log(killerRobots(robotTalk)); //=> [false, true, false, true, false, false]




