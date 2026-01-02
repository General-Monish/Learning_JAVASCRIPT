let computerChoice = "";
function choosebat() {
    let randomNumber = Math.random() * 3;
    const userChoice = "You Chooses Bat";
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = "Computer Chooses Bat";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = "Computer Chooses Ball";
    }
    else {
        computerChoice = "Computer Chooses Wicket";
    }

    let result = '';
    if (computerChoice === "Computer Chooses Bat") {
        result = "It's a Tie!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else if (computerChoice === "Computer Chooses Ball") {
        result = "You Win!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else {
        alert(`${userChoice}. ${computerChoice}. You Lose!`);
    }
}

function chooseball() {
    let randomNumber = Math.random() * 3;
    const userChoice = "You Chooses Ball";

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = "Computer Chooses Bat";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = "Computer Chooses Ball";
    }
    else {
        computerChoice = "Computer Chooses Wicket";
    }

    let result = '';
    if (computerChoice === "Computer Chooses Bat") {
        result = "You Lose!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else if (computerChoice === "Computer Chooses Ball") {
        result = "It's a Tie!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else {
        alert(`${userChoice}. ${computerChoice}. You Win!`);
    }
}

function choosewicket() {
    let randomNumber = Math.random() * 3;
    const userChoice = "You Chooses Wicket";

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = "Computer Chooses Bat";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = "Computer Chooses Ball";
    }
    else {
        computerChoice = "Computer Chooses Wicket";
    }

    let result = '';
    if (computerChoice === "Computer Chooses Bat") {
        result = "You Win!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else if (computerChoice === "Computer Chooses Ball") {
        result = "You Lose!";
        alert(`${userChoice}. ${computerChoice}. ${result}`);
    }
    else {
        alert(`${userChoice}. ${computerChoice}. It's a Tie!!`);
    }
}