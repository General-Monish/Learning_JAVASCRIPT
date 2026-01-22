// TO_DO_APP/todo.js
// This file contains the logic for a simple to-do application
let toDoList = [
    {'task': 'Learn JavaScript', 'date': '2024-07-01'},
    {'task': 'Build a to-do app', 'date': '2024-07-05'},
];
displayToDo();

// Function to add a new to-do item
function addTodo() {
    // Get the input element and its value
    let inputButtonElement = document.querySelector('#todo_input');
    let dateInputElement = document.querySelector('#todo_date');
    // Get the value from the input element
    let inputValueElemet = inputButtonElement.value;
    let dateValueElement = dateInputElement.value;
    // Add the new to-do item to the list
    toDoList.push({'task': inputValueElemet, 'date': dateValueElement});
    // Clear the input fields
    inputButtonElement.value = '';
    dateInputElement.value = '';
    displayToDo();
}

// Function to display the to-do list
function displayToDo(){
    let todoListItem = document.querySelector('#todo_container');
    // Clear the existing HTML
    let newHTML = '';
    // Loop through the to-do list and create HTML for each item
    for ( let i = 0; i < toDoList.length; i++){
        // Get the task and date for each to-do item
        let task = toDoList[i]['task'];
        let date = toDoList[i]['date'];
        // Append the HTML for each to-do item with a delete button
        newHTML += `
        
        <span>${task}</span>
        <span>${date}</span>
        <button id="delete-btn" onclick="toDoList.splice(${i},1);
        displayToDo();
        ">Delete</button>
        `;
    }
    // Update the inner HTML of the container with the new HTML
    todoListItem.innerHTML = newHTML;
}