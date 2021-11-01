//Small Project 26.10.2021 Complete user stories given by Ryan
//template literals

// console.log('string1\n' + 'string2');
// console.log(`string1 \nstring2`); 
// console.log(`string1 \\nstring2`);//to include the \n
// console.log(`string1
// string2`);

// Refactoring - Use function introductionTest - to overwrite the original
function showTaskMessage(task, taskMessage) {
    document.getElementById(task).innerText = taskMessage;
}
// for HTML messages
function showHtmlTaskMessage(task, taskMessage) {
    document.getElementById(task).innerHTML = taskMessage;
}

// Task 1
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>"

let person1 = {
    name: "John",
    task: "task1"
};

function showTask1() {
    const message = `Hello, ${person1.name}`;
    showTaskMessage(person1.task, message);
}

// Task 2
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>, I am <age>"

let person2 = {
    name: "Steven",
    age: "29",
    task: "task2"
};

function showTask2() {
    const message2 = `Hello, ${person2.name}, I am ${person2.age}`;
    showTaskMessage(person2.task, message2);
}

// Task 3
// GIVEN I am a customer who is full time
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work full time"

// Whenever using the function, and it needs to 'calculate' something, ALWAYS put 'return'
// return - also acts as the 'early escape' in the function
// nothing else runs after the 'return'

function introduction(a) {
   return `Hello, ${a.name}, I am ${a.age} and I work ${a.work}.`;
}

let person3 = {
    name: "Chong",
    age: "28",
    work: "full time",
    task: "task3"
};

function showTask3() {
    // document.getElementById(person3.task).innerText = introduction(person3);
    const taskMessage = introduction(person3);
    showTaskMessage(person3.task, taskMessage);
}

// Task 4
// GIVEN I am a customer who is part time
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work part time"

let person4 = {
    name: "Harley",
    age: "27",
    work: "part time",
    task: "task4"
};

function showTask4() {
    const taskMessage = introduction(person4);
    showTaskMessage(person4.task, taskMessage);
}
 
// Task 5
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as 
// "Hello, <name>, I am <age> and I work full time"
// AND I want to see an array of my shopping list in a list on the webpage like: 
// "Shopping list: pizza, salad, cheese"

function introductionWithShoppingList(a) {
    return `Hello, ${a.name}, I am ${a.age} and I work ${a.work}.
    Shopping List:`;
 }

let person5 = {
    name: "Ryan",
    age: "18",
    work: "full time",
    task: "task5",
    taskb: "task5b",
    taskc: "task5c"
}
const ryanShoppingList = [ 'Pizza', 'Salad', 'Cheese'];
const ryansFriend = [ 'Fish', 'Chocolate', 'Sandwich'];

function showTask5() {
    const taskMessage = introductionWithShoppingList(person5);
    showTaskMessage(person5.task, taskMessage);
}
//Another method is using the FOR // Creating a bullet point list using a for loop - google
function createShoppingList(a, task) {
    let listTaskItems = '<ul>';
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        listTaskItems += `<li>${a[i]}</li>`
    }
    listTaskItems += `</ul>`;
    showHtmlTaskMessage(task, listTaskItems);
}

function showTask5b() {
    createShoppingList(ryanShoppingList, person5.taskb);
}

function showTask5c() {
    createShoppingList(ryansFriend, person5.taskc);
}

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
    document.getElementById("task6").innerText = `Hello, ${person6.name}, I am ${person6.age} and I work full time.
    Shopping list:`
}
function showTask6b() {
    let listTask6Items = '<ul>';
    for (let i = 0; i < abelShoppingList.length; i++) {
        console.log(abelShoppingList[i]);
        listTask6Items += `<li>${abelShoppingList[i]}</li>`
    }
    listTask6Items += '</ul>';
    document.getElementById('task6b').innerHTML = listTask6Items;
}
function task6c() {
    abelShoppingList.push('Milk');
    //refactored function
    //disables button
}

// Task 7
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>, I am <age> and I work full time"
// AND I want to see an array of my shopping list in a list on the webpage like: "Shopping list: pizza, salad, cheese"
// WHEN I click a button "Remove from shopping list"
// THEN I should see on the page "Shopping list: pizza, salad"
let person7 = {
    name: "Tom",
    age: "26"
}
const tomShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask7() {
    document.getElementById('task7').innerText = `Hello, ${person7.name}, I am ${person7.age} and I work full time.
    Shopping list:`
}
function showTask7b() {
    let listTask7Items = '<ul>';
    for (let x = 0; x < tomShoppingList.length; x++) {
        console.log(tomShoppingList[x]);
        listTask7Items += `<li>${tomShoppingList[x]}</li>`
    }
    listTask7Items += '</ul>';
    document.getElementById('task7b').innerHTML = listTask7Items;
    // make a new function that creates a shopping list
    // tom's shopping list
    // create a new function - function create shopping list
    // pass in the parameter
    // passing parameters into functions
    // common code extract it into a function
    // pass the array its built of from
    // parameter to the function
    // 
}




function task7c() {
    tomShoppingList.pop();
    let listTask7Items = '<ul>';
    for (let x1 = 0; x1 < tomShoppingList.length; x1++) {
        console.log(tomShoppingList[x1]);
        listTask7Items += `<li>${tomShoppingList[x1]}</li>`
    }
    listTask7Items += '</ul>';
    document.getElementById('task7b').innerHTML = listTask7Items;
    document.getElementById('task7cButton'). disabled = true;
    // include an if statement 
    // 
}

// Task 8
// GIVEN I am a customer
// WHEN I load the app
// THEN I want to see my name as "Hello, <name>, I am <age> and I work full time"
// AND I want to see an array of my shopping list in a list on the webpage like: "Shopping list: pizza, salad, cheese"
// WHEN I click a button "Add to shopping list"
// THEN I should see on the page "Shopping list: pizza, salad, cheese, milk"
// WHEN I click a button "Add to shopping list"
// AND I have no other items to add to my list
// THEN an Alert is popped up to say no more items to add

let person8 = {
    name: "Hamil",
    age: "24"
}
const hamilShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask8() {
    document.getElementById('task8').innerText = `Hello, ${person8.name}, I am ${person8.age} and I work full time.
    Shopping list:`
}
function showTask8b() {
    let listTask8Items = '<ul>';
    for (let h = 0; h < hamilShoppingList.length; h++) {
        console.log(hamilShoppingList[h]);
        listTask8Items += `<li>${hamilShoppingList[h]}</li>`
    }
    listTask8Items += '</ul>';
    document.getElementById('task8b').innerHTML = listTask8Items;
}
function task8c() {
    hamilShoppingList.push('Milk');
    console.log(hamilShoppingList);
    let listTask8Items = '<ul>';
    for (let h1 = 0; h1 < 4; h1++) {
        console.log(hamilShoppingList[h1]);
        listTask8Items += `<li>${hamilShoppingList[h1]}</li>`
    }
    listTask8Items += '</ul>';
    document.getElementById('task8b').innerHTML = listTask8Items;
}

showTask1();
showTask2();
showTask3();
showTask4();
showTask5();
showTask5b();
showTask5c();
showTask6();
showTask6b();
showTask7();
showTask7b();
showTask8();
showTask8b();