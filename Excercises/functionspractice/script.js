
const greetResult = document.querySelector("#greetResult");
const areaResult = document.querySelector("#areaResult");
const evenoddResult = document.querySelector("#evenOddResult");
const maxResult = document.querySelector("#maxResult");

function greetUser(name) {
    greetResult.textContent = `Hello, ${name}!`;
    return greetResult.textContent;
}
function greetFromInput() {
    const input = document.querySelector('#nameInput');
    const name = input ? input.value.trim() : '';
    if (!name) {
        alert('Please enter a name.');
        return;
    }
    greetUser(name);
}

function areaOfRectangle(length, width) {
    areaResult.textContent = `The area of the rectangle is ${length * width}.`;
    return areaResult.textContent;
}

function oddInput() {   
    const input = document.querySelector('#oddInput');
    const number = parseInt(input ? input.value.trim() : '', 10);   
    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }
    isOdd(number);
}
function isOdd(number) {
    evenoddResult.textContent = number % 2 !== 0 ? `${number} is odd.` : `${number} is not odd.`;
    return evenoddResult.textContent;
}

function maxOfThreeNumbers(a, b, c) {
    maxResult.textContent = `The maximum number is ${Math.max(a, b, c)}.`;
    return maxResult.textContent;
}
