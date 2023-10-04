const roundsInput = document.querySelectorAll(".roundInput");
const movesLeft = document.querySelector(".movesLeft");
const resultText = document.querySelector(".resultText");
const restartButton = document.querySelector(".restart");
const move = document.querySelector(".move");
const roundsSelection = document.querySelector(".roundsSelection");
const gameColor = document.querySelector(".game");
let userScore = 0;
let computerScore = 0;
let roundsRemaining = 3;
const computerOptions = ["rock", "paper", "scissors"];
const userScoreBoard = document.querySelector(".user");
const computerScoreBoard = document.querySelector(".comp");
const userOptions = document.querySelectorAll(".rock, .paper, .scissors");
const title = document.querySelector(".title");

// Event-Listener für Radio-Buttons
roundsInput.forEach((input) => {
  input.addEventListener("change", () => {
    startGame(parseInt(input.value));
    userScoreBoard.innerHTML = 0;
    computerScoreBoard.innerHTML = 0;
  });
});
// Funktion, um das Spiel zu starten
function startGame(rounds) {
  roundsRemaining = rounds;
  movesLeft.textContent = `Moves Left: ${roundsRemaining}`;
}
// Event-Listener für Spieloptionen (Stein, Schere, Papier) + Computer random auswahl & round end function
userOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const userChoice = option.value;
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[choiceNumber];
    console.log(choiceNumber);
    playRound(userChoice, computerChoice);
    console.log(userChoice);
    console.log(computerChoice);
    // // funktion gameOver starten wenn Runde beendet ist.
    if (roundsRemaining === 0) {
      console.log("Game Over");
      gameOver();
      userOptions.forEach((option) => {
        option.style.display = "none";
      });
      move.innerHTML = "GAME OVER !!!";
      roundsSelection.style.display = "none";
    }
  });
});

function playRound(userChoice, computerChoice) {
  roundsRemaining--;
  movesLeft.textContent = `Moves Left: ${roundsRemaining}`;
  if (userChoice === computerChoice) {
    resultText.innerHTML = "Tie";
    resultText.style.color = "azure";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      resultText.innerHTML = "Computer Won";
      resultText.style.color = "red";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else {
      resultText.innerHTML = "User Won";
      resultText.style.color = "#308D46";
      userScore++;
      userScoreBoard.innerHTML = userScore;
    }
  } else if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      resultText.innerHTML = "Computer Won";
      resultText.style.color = "red";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      resultText.innerHTML = "User Won";
      resultText.style.color = "#308D46";
      userScore++;
      userScoreBoard.textContent = userScore;
    }
  } else if (userChoice === "paper") {
    if (computerChoice == "scissors") {
      resultText.innerHTML = "Computer Won";
      resultText.style.color = "red";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      resultText.innerHTML = "User Won";
      resultText.style.color = "#308D46";
      userScore++;
      userScoreBoard.textContent = userScore;
    }
  }
}

const gameOver = () => {
  if (userScore > computerScore) {
    resultText.style.fontSize = "2rem";
    resultText.innerText = "You Won The Game";
    resultText.style.color = "#308D46";
    gameColor.style.backgroundColor = "#308D46";
    title.innerHTML = "YOU WON, REMATCH? PRESS RESTART";
    title.style.color = "rgb(48, 48, 48)";
  } else if (userScore < computerScore) {
    resultText.style.fontSize = "2rem";
    resultText.innerText = "You Lost The Game";
    resultText.style.color = "red";
    gameColor.style.backgroundColor = "red";
    title.innerHTML = "YOU LOST, RETRY? PRESS RESTART";
    title.style.color = "black";
  } else {
    resultText.style.fontSize = "2rem";
    resultText.innerText = "Tie";
    resultText.style.color = "grey";
    gameColor.style.backgroundColor = "grey";
    title.innerHTML = "WE ARE BOTH WINNER! TRY AGAIN? PRESS RESTART?";
    title.style.color = "azure";
  }
};
// funktion für den restart button
restartButton.addEventListener("click", () => {});
