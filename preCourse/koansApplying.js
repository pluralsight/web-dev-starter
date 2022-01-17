// Applying what you have learned : Koans

var products;

products = [
  { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
  { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
  { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
  { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
  { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
];

//filter ... every ... includes
// var listAllSun = function(arr){
//   return arr.filter(function(el){
//     el.ingredients.some(function(ev){
//        console.log(ev)
//        if (ev.indexOf('sundried') !== -1){
//        return el.ingredients
//        }
//       })
//     })
//   }



//console.log(listAllSun(products))

/*********************************************************************************/

// var i, j, hasMushrooms;
// var productsICanEat = [];

// for (i = 0; i < products.length; i += 1) {
//   if (products[i].containsNuts === false) {
//     hasMushrooms = false;
//     for (j = 0; j < products[i].ingredients.length; j += 1) {
//       if (products[i].ingredients[j] === 'mushrooms') {
//         hasMushrooms = true;
//       }
//     }
//     if (!hasMushrooms) {
//       productsICanEat.push(products[i]);
//     }
//   }
// }


// var productsICanEat = [];




/* solve using filter() & every() / some() */
productsICanEat = products.push(products.filter(function(el){
    return el.ingredients.every(function(e){
      return e !== 'mushrooms'
    }) && el.containsNuts === false;
}))

//console.log(productsICanEat)
//can use every inside filter function

// const food = _(products).chain()
//   .filter(function(a){ if (a.containsNuts === false) {return true}});
//   console.log(food)

