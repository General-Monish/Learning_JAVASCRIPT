let toDoList = [];

function addTodo() {
    let inputButtonElement = document.querySelector('#todo_input');
    let inputValueElemet = inputButtonElement.value;
    toDoList.push(inputValueElemet);
    inputButtonElement.value = '';
}