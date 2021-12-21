//ToDo List 
//Udemy Course
//202



var input = prompt ('What would you like to do?');
const todos = [];
while (input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        for (var i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
    } else if (input === 'new'){
        const newTodo = prompt('Ok, what is the new todo?')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }else if (input === 'delete'){
        const deleteTodo = parseInt(prompt('Ok, which number would you like to delete?'))
        if (!Number.isNaN(deleteTodo)){
        const deleted = todos.splice(deleteTodo, 1)
        console.log(`OK, deleted ${deleted}`)
    } else {
        console.log('Invalid index')

    }
    }
    input = prompt ('What would you like to do?')
    
}

