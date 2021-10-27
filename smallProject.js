//Small Project 26.10.2021 Complete user stories given by Ryan
//template literals

console.log('string1\n' + 'string2');
console.log(`string1 \nstring2`); 
console.log(`string1 \\nstring2`);//to include the \n
console.log(`string1
string2`);

// Task 1
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>"

let person1 = {
    name: "John"
};

function showTask1() {
    document.getElementById('task1').innerText = `Hello, ${person1.name}`
}

// Task 2
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>, I am <age>"

let person2 = {
    name: "Steven",
    age: "29"
};

function showTask2() {
    document.getElementById('task2').innerText = `Hello, ${person2.name}, I am ${person2.age}`
}

// Task 3
// GIVEN I am a customer who is full time
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work full time"

let person3 = {
    name: "Chong",
    age: "28"
};

function showTask3() {
    document.getElementById('task3').innerText = `Hello, ${person3.name}, I am ${person3.age} and I work full time`
}

// Task 4
// GIVEN I am a customer who is part time
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work part time"

let person4 = {
    name: "Harley",
    age: "27"
};

function showTask4() {
    document.getElementById('task4').innerText = `Hello, ${person4.name}, I am ${person4.age} and I work part time`
}
 
// Task 5
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work full time"
// AND I want to see an array of my shopping list in a list on the webpage like: 
// "Shopping list: pizza, salad, cheese"

let person5 = {
    name: "Ryan",
    age: "18"
}
const ryanShoppingList = [ 'Pizza', 'Salad', 'Cheese'];

function showTask5() {
    document.getElementById('task5').innerText = `Hello, ${person5.name}, I am ${person5.age} and I work full time
    Shopping list:`
}

//Another method is using the FOR

function showTask5b() {
    let listItems = '<ul>';
    for (let i = 0; i < ryanShoppingList.length; i++) {
        console.log(ryanShoppingList[i]);
        listItems += `<li>${ryanShoppingList[i]}</li>`
    }
    listItems += '</ul>';
    document.getElementById('task5b').innerHTML = listItems;
}
// Creating a bullet point list using a for loop - google

// Task 6
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work full time"
// AND I want to see an array of my shopping list in a list on the webpage like: 
// "Shopping list: pizza, salad, cheese"
// WHEN I click a button "Add to shopping list"
// THEN I should see on the page 
// "Shopping list: pizza, salad, cheese, milk"

let person6 = {
    name: "Abel",
    age: "25"
}
const abelShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask6() {
    document.
}


showTask1();
showTask2();
showTask3();
showTask4();
showTask5();
showTask5b();