// TO_DO_APP/todo.js
// This file contains the logic for a simple to-do application
let toDoList = [];

// Function to add a new to-do item
function addTodo() {
    // Get the input element and its value
    let inputButtonElement = document.querySelector('#todo_input');
    // Get the value from the input element
    let inputValueElemet = inputButtonElement.value;
    toDoList.push(inputValueElemet);
    inputButtonElement.value = '';
}