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
function createShoppingList(person, task) {
    console.log(person.shoppingList)
    let listTaskItems = '<ul>';
    for (let i = 0; i < person.shoppingList.length; i++) {
        console.log(task, person.shoppingList[i]);
        listTaskItems += `<li>${person.shoppingList[i]}</li>`
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
    createShoppingList(person5, person5.taskb);
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
    shoppingList: [ 'Pizza', 'Salad', 'Cheese' ],
    wishList: ['Milk', 'Bread']
}
function showTask6() {
    const taskMessage = introductionWithShoppingList(person6);
    showTaskMessage(person6.task, taskMessage);
}
function showTask6b() {
    createShoppingList(person6, person6.taskb);
}
function task6c() {
    if (person6.wishList.length === 0) {
        alert(" No more items to add. ")
    } else {
        person6.shoppingList.push(person6.wishList.shift());
        createShoppingList(person6, person6.taskb);
    }
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
    taskb: "task7b",
    shoppingList: [ 'Pizza', 'Salad', 'Cheese' ],
    wishList: []
}
function showTask7() {
    const taskMessage = introductionWithShoppingList(person7);
    showTaskMessage(person7.task, taskMessage);
}
function showTask7b() {
    createShoppingList(person7, person7.taskb);
} 
function task7c() {
    if (person7.shoppingList.length == 0) {
        document.getElementById('task7b').innerHTML = `- No items in shopping list.`;
        alert(" No more items to remove. ")
    } else {
        person7.shoppingList.pop();
        createShoppingList(person7, person7.taskb);
    }
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
    taskb: "task8b",
    shoppingList: [ 'Pizza', 'Salad', 'Cheese' ],
    wishList: [ 'Milk' ]
}
function showTask8() {
    const taskMessage = introductionWithShoppingList(person8);
    showTaskMessage(person8.task, taskMessage);
}
function showTask8b() {
    createShoppingList(person8, person8.taskb)
}
function task8c() {
    if (person8.wishList.length == 0) {
        alert(" No more items to add. ")
    } else {
        person8.shoppingList.push(person8.wishList.shift());
        createShoppingList(person8, person8.taskb)
    }

}

const person9 = {
    name: 'Test Person',
    shoppingList: [ 'Milk', 'Eggs', 'Bread'],
    taskb: "task9b"
}
const shop = {
    products: [
        {
            name: 'Milk',
            inStock: true,
            price: 1.50
        },
        {
            name: 'Eggs',
            inStock: false,
            price: 0.99
        },
        {
            name: 'Bread',
            inStock: true,
            price: 1.50
         },
         {
            name: 'Crumpets',
            inStock: true,
            price: 1.00
         },
    ],
    name: 'Fake Shop'
}

function showTask9b() {
    createShoppingList(person9, person9.taskb)
}

function showTask9c() {
// need to make a new list with each item from the shopping list
// in said list, also add new text alongside it
// saying whether the item is available or unavailable
}


function showTask9d(person) {
    // following the previous created list
    // use if statements to then add the prices up all together
    // finally display the full price of items that are AVAILABLE
    // dont add items that are not in stock in shop

    const itemsAvailableInShop = person.shoppingList.filter(item => {
        const shopProduct = shop.products.find((product) => {
            return product.name === item
        })

        return shopProduct.inStock
    })
    console.log('itemsAvailableInShop', itemsAvailableInShop)
}

showTask1();
showTask2();
showTask3();
showTask4();
showTask5();
showTask5b();
showTask6();
showTask6b();
showTask7();
showTask7b();
showTask8();
showTask8b();
showTask9b();
showTask9d(person9);