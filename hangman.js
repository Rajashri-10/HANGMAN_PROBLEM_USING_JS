const words = ["javascript", "bootstrap", "hangman", "programming"];
let selectedWord = "";
let guessedLetters = [];
let attempts = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 6;
    updateDisplay();
}

function updateDisplay() {
    const wordDisplay = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
    document.getElementById("wordDisplay").innerText = wordDisplay;
    document.getElementById("attemptsLeft").innerText = attempts;
    document.getElementById("message").innerText = "";

    if (!wordDisplay.includes("_")) {
        document.getElementById("message").innerText = "Congratulations! You've guessed the word!";
    } else if (attempts <= 0) {
        document.getElementById("message").innerText = `Game Over! The word was "${selectedWord}".`;
    }
}

document.getElementById("guessButton").addEventListener("click", () => {
    const letterInput = document.getElementById("letterInput");
    const letter = letterInput.value.toLowerCase();

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            attempts--;
        }
        updateDisplay();
    }

    letterInput.value = "";
});

// Start the game on page load
window.onload = startGame;