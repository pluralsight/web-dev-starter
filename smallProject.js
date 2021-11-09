// Small Project 26.10.2021 Complete user stories given by Ryan
// template literals
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
// Creates an introduction message using different names/age/work status
// function introduction(a) {
//     return `Hello, ${a.name}, I am ${a.age} and I work ${a.work}.`;
// }
function introduction(a) {
    if (a.isFullTime == true) {
        return `Hello, ${a.name}, I am ${a.age} and I work full time.`;
    } else {
        return `Hello, ${a.name}, I am ${a.age} and I work part time.`;
    }
}
// Creates an intro with an extra line for Shopping List
function introductionWithShoppingList(a) {
    if (a.isFullTime == true) {
        return `Hello, ${a.name}, I am ${a.age} and I work full time.
        Shopping List:`;
    } else {
        return `Hello, ${a.name}, I am ${a.age} and I work part time.
        Shopping List:`;
    }

 }
// Creating a list for the shopping list
function createShoppingList(a, task) {
    let listTaskItems = '<ul>';
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        listTaskItems += `<li>${a[i]}</li>`
    }
    listTaskItems += `</ul>`;
    showHtmlTaskMessage(task, listTaskItems);
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
// arrow function - alternative method to write functions
let person3 = {
    name: "Chong",
    age: "28",
    isFullTime: true,
    task: "task3"
};
// TODO: Come back
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
    isFullTime: false,
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
let person5 = {
    name: "Ryan",
    age: "18",
    isFullTime: true,
    task: "task5",
    taskb: "task5b",
    shoppingList: ['Pizza', 'Salad', 'Cheese']
}
function showTask5() {
    const taskMessage = introductionWithShoppingList(person5);
    showTaskMessage(person5.task, taskMessage);
}
//Another method is using the FOR // Creating a bullet point list using a for loop - google
function showTask5b() {
    createShoppingList(person5.shoppingList, person5.taskb);
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
    age: "25",
    isFullTime: true,
    task: "task6",
    taskb: "task6b",
    shoppingList: [],
    wishList: ['Milk', 'Bread']
}

const abelShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask6() {
    const taskMessage = introductionWithShoppingList(person6);
    showTaskMessage(person6.task, taskMessage);
}
function showTask6b() {
    createShoppingList(abelShoppingList, person6.taskb);
}
function task6c() {
    abelShoppingList.push('Milk');
    console.log(abelShoppingList);
    createShoppingList(abelShoppingList, person6.taskb);
    document.getElementById('task6cButton').disabled = true;
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
    age: "26",
    isFullTime: true,
    task: "task7",
    taskb: "task7b"
}
const tomShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask7() {
    const taskMessage = introductionWithShoppingList(person7);
    showTaskMessage(person7.task, taskMessage);
}
function showTask7b() {
    createShoppingList(tomShoppingList, person7.taskb);
}
function task7c() {
    tomShoppingList.pop();
    console.log(tomShoppingList);
    createShoppingList(tomShoppingList, person7.taskb);
    document.getElementById('task7cButton').disabled = true;
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
    age: "24",
    isFullTime: true,
    task: "task8",
    taskb: "task8b"
}
const hamilShoppingList = [ 'Pizza', 'Salad', 'Cheese' ];
function showTask8() {
    const taskMessage = introductionWithShoppingList(person8);
    showTaskMessage(person8.task, taskMessage);
}
function showTask8b() {
    createShoppingList(hamilShoppingList, person8.taskb)
}
let click = 0;
function task8c() {
    if (click > 0) {
        alert("No more items to add.");
    } else {
        hamilShoppingList.push('Milk');
        createShoppingList(hamilShoppingList, person8.taskb)
    }
    click++;
    console.log(click);
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