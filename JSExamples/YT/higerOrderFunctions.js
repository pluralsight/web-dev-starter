//YT : JS - Higer Order Functions

/*
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//forEach #####################################################

// for (let i = 0; i < companies.length; i++){
//   console.log(companies[i]);
// }

// companies.forEach(function(el){
//   console.log(el.end - el.start)
// });


//filter  ##################################################

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }
//console.log(canDrink)


/////////////
// let canDrink = ages.filter(function(el){
//   if(el >= 21){
//     return true
//   }
// });
// console.log (canDrink);
/////////////



////////////
// const retailCompanies = companies.filter(function(el){
//   if(el.category === "Retail") {
//     return true;
//   }
// })
// console.log(retailCompanies)
///////////


/////////////
const eightiesCompanies = companies.filter(function(el){
  if(el.start > 1979 && el.start < 1990 && el.category === 'Retail'){
    return true;
  }
})
const eightiesCompaniesNames = eightiesCompanies.map(function(el){
  if(el.name !== undefined){
    return el.name
  }
})
const companyFour = eightiesCompaniesNames.filter(function(el){
  if(el === 'Company Four'){
    return true
  }
})

var flat = companyFour.join('')

// console.log(eightiesCompanies)   //[{…}, {…}]
// console.log(eightiesCompaniesNames)  //['Company Four', 'Company Nine']
// console.log(companyFour)  //['Company Four']
// console.log(flat)  //Company Four
/////////////

//Get companies that lasted 10 years or more using filter
const tenYear = companies.filter(function(el) {
  if(el.end - el.start >= 10){
    return true
  }
})
//console.log(tenYear)
////////////////////////

//Get all financial companies that lasted 10 years or more
const finTenYear = companies.filter(function(el){
  if(el.end - el.start >= 10 && el.category === 'Finance')
  return true;
})
//console.log(finTenYear)

//create an array of all the names of companies that are financial and lasted ten years
const finTenYearList = finTenYear.map(function(el){
  return el.name
});
//console.log(finTenYearList.join(', '))
////////////////////

//get array of ages for all companies
const compAges = companies.map(function(el, index, array){
  return el.end - el.start
})
const aveAgeofComp = [Math.floor(compAges.reduce(function(a,b){
  return (a + b)
}, 0)/compAges.length)]

// console.log(compAges)
// console.log(aveAgeofComp)


//map ###################################################################
//all company names
var allNames = companies.map(function(el){
  return el.name
}).filter(function(el){
    //return el.indexOf('Com') !== -1
    if(el.length >= 12){
      return el
    }
}).join(', ')
console.log(allNames)






//sort

//reduce
