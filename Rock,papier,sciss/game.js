let PlayerScore = 0;
let CompScore = 0;

const game = (userChoice) => {
    let displayArea = document.getElementById('display')
    let score = document.getElementById('score')

    const choices = ["rock", "paper", "scissors"]
    let compChoice = choices[Math.floor(Math.random() * choices.length)];


    let result;
    if (userChoice === compChoice){
    result = "its a tie"
    displayArea.style.background = 'gray';
    } else if ((userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
    ){
        result = "You win";
        PlayerScore += 1;
        displayArea.style.background = 'green';
    } else {
        result = "Computer wins!";
        CompScore += 1;
        displayArea.style.background = 'red';
    }

    displayArea.textContent = `User choice: ${userChoice} Computer choice: ${compChoice} Result: ${result}`;

    score.textContent = `Player score: ${PlayerScore} Computer score: ${CompScore}`;
}