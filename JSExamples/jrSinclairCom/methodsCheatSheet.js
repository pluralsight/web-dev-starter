

//A civilized guide to JS array methods (pdf)
//Documents/HackReactor/

const heroes = [
  {name: 'Hulk', strength: 90000},
  {name: 'Spider-Man', strength: 25000},
  {name: 'Hawk Eye', strength: 136},
  {name: 'Thor', strength: 100000},
  {name: 'Black Widow', strength: 136},
  {name: 'Vision', strength: 5000},
  {name: 'Scarlet Witch', strength: 60},
  {name: 'Mystique', strength: 120},
  {name: 'Namora', strength: 75000},
  {name: 'Captain America', strength: 362},
  {name: 'Deadpool', strength: 1814},
  //{name: 'Black Panther', strength: 1814},
  {name: 'Black Panther'}
 ];

//FIND                                 FIND
 function isHulk(hero) {
  return hero.name === 'Namora';
 }
 const hulk = heroes.find(isHulk);
 console.log(hulk)

 //MAP                                  MAP
 function getName(hero) {
  return hero.name;
 }
 const names = heroes.map(getName);
 console.log(names)

 //FILTER                             FILTER
 function strong(hero) {
 return hero.strength >= 200;
}
const tuff = heroes.filter(strong);
console.log(tuff)

//EVERY                               EVERY
// function strong(hero) {
//   return hero.strength >= 200;
//  }
//  const tuff = heroes.every(strong);

//CONCAT                              CONCAT
const extras = [
  {name: 'Cyclops', strength: 136},
  {name: 'Gambit', strength: 136},
 ];
 const more = heroes.concat(extras);
 console.log(more)

 //JOIN                               JOIN
 function getName(hero) {
  return `${hero.name} : ${hero.strength}`;
 }
 const list = heroes
  .map(getName)
  .join('\n');
console.log(list)

//SOME                                SOME
function isHulk(hero) {
  return hero.name === 'Hulk';
 }
 const hulkIn = heroes.some(isHulk);
 console.log(hulkIn) //true

 //INCLUDES                           INCLUDES
 function getName(hero) {
  return hero.name;
 }
 const hulkIn2 = heroes
  .map(getName)
  .includes('Hulk');
console.log(hulkIn2) //true

//REDUCE  REDUCE  REDUCE  REDUCE  REDUCE  REDUCE  REDUCE
function sumStrength(total, hero) {
  //console.log(total, hero.strength)
  return total + hero.stength;
 }

//  function sumStrLoop (arr){
//    var sumTotal = 0;
//    for(let i = 0; i < arr.length; i++){
//      //console.log(arr[i].strength)
//      sumTotal += arr[i].strength
//    }
//    return sumTotal
//  }
//console.log(sumStrLoop(heroes))

const totalStength2 = heroes.reduce(
  sumStrength,
  0
 );
//  console.log(totalStength2)



const strSum = heroes
.filter(function(el){
  if (el.strength){
  return el
  }
})
.reduce(function(total, hero){
   return total + hero.strength
 },0)
console.log(strSum)






//average hero strength
const aveHeroStr = heroes.reduce(function(acc, item, index){
  return acc + item.strength


},0)/heroes.length;
console.log(aveHeroStr)

