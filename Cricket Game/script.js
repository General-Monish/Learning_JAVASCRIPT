let computerChoice = "";
let score = { wins: 0, losses: 0, ties: 0 };

// Create results display if it doesn't exist
function initializeResultsDisplay() {
    if (!document.getElementById('results')) {
        const resultsDiv = document.createElement('div');
        resultsDiv.id = 'results';
        resultsDiv.style.cssText = `
            margin-top: 30px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            display: none;
        `;
        
        const scoreDisplay = document.createElement('div');
        scoreDisplay.id = 'score';
        scoreDisplay.style.cssText = `
            font-size: 1.2em;
            margin-bottom: 15px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
        `;
        
        const resultText = document.createElement('p');
        resultText.id = 'result-text';
        resultText.style.cssText = `
            font-size: 1.3em;
            margin: 10px 0;
            font-weight: bold;
        `;
        
        const choicesText = document.createElement('p');
        choicesText.id = 'choices-text';
        choicesText.style.cssText = `
            color: #666;
            margin: 10px 0;
        `;
        
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Play Again';
        closeButton.style.cssText = `
            background: #2e8b57;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            margin-top: 10px;
            transition: background 0.3s;
        `;
        closeButton.onmouseover = () => closeButton.style.background = '#3cb371';
        closeButton.onmouseout = () => closeButton.style.background = '#2e8b57';
        closeButton.onclick = () => document.getElementById('results').style.display = 'none';
        
        resultsDiv.appendChild(scoreDisplay);
        resultsDiv.appendChild(resultText);
        resultsDiv.appendChild(choicesText);
        resultsDiv.appendChild(closeButton);
        document.querySelector('main').appendChild(resultsDiv);
        
        updateScoreDisplay();
    }
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    if (scoreDisplay) {
        scoreDisplay.innerHTML = `
            Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}
        `;
    }
}

function showResult(userChoice, computerChoice, result) {
    initializeResultsDisplay();
    
    const resultsDiv = document.getElementById('results');
    const resultText = document.getElementById('result-text');
    const choicesText = document.getElementById('choices-text');
    
    // Update result text with appropriate color
    resultText.textContent = result;
    if (result.includes('Win')) {
        resultText.style.color = '#2e8b57'; // Green for win
    } else if (result.includes('Lose')) {
        resultText.style.color = '#dc3545'; // Red for loss
    } else {
        resultText.style.color = '#ffc107'; // Yellow for tie
    }
    
    // Update choices text
    choicesText.textContent = `${userChoice}. ${computerChoice}`;
    
    // Show results
    resultsDiv.style.display = 'block';
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Simplified game logic with DRY principle
function playGame(userChoice) {
    const choices = ["Bat", "Ball", "Wicket"];
    const userChoiceText = `You Choose ${userChoice}`;
    
    // Computer random choice
    const randomIndex = Math.floor(Math.random() * 3);
    computerChoice = `Computer Chooses ${choices[randomIndex]}`;
    
    // Determine result
    let result = '';
    if (userChoice === choices[randomIndex]) {
        result = "It's a Tie!";
        score.ties++;
    } else if (
        (userChoice === "Bat" && choices[randomIndex] === "Ball") ||
        (userChoice === "Ball" && choices[randomIndex] === "Wicket") ||
        (userChoice === "Wicket" && choices[randomIndex] === "Bat")
    ) {
        result = "You Win!";
        score.wins++;
    } else {
        result = "You Lose!";
        score.losses++;
    }
    
    // Update and show results
    updateScoreDisplay();
    showResult(userChoiceText, computerChoice, result);
}

// Updated button click handlers
function choosebat() {
    playGame("Bat");
}

function chooseball() {
    playGame("Ball");
}

function choosewicket() {
    playGame("Wicket");
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeResultsDisplay);