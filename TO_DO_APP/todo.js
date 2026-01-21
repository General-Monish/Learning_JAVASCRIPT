// TO_DO_APP/todo.js
// This file contains the logic for a simple to-do application
let toDoList = [];
displayToDo();

// Function to add a new to-do item
function addTodo() {
    // Get the input element and its value
    let inputButtonElement = document.querySelector('#todo_input');
    // Get the value from the input element
    let inputValueElemet = inputButtonElement.value;
    toDoList.push(inputValueElemet);
    inputButtonElement.value = '';
    displayToDo();
}

// Function to display the to-do list
function displayToDo(){
    let todoListItem = document.querySelector('#todo_list');
    todoListItem.innerHTML = '';
    for ( let i = 0; i < toDoList.length; i++){
        todoListItem.innerHTML += `${toDoList[i]} <br/>`;
    }
}