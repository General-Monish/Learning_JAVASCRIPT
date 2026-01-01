let currentInput = '';
function updateDisplay() {
    document.querySelector('#display').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.querySelector('#display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.querySelector('#display').value = 'Error';
        currentInput = '';
    }
}