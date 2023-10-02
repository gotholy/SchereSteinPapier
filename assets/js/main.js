document.addEventListener("DOMContentLoaded", function () {
  const roundsInput = document.querySelectorAll(".roundInput");
  const movesLeft = document.querySelector(".movesLeft");
  const resultText = document.querySelector(".resultText");
  const restartButton = document.querySelector(".restart");

  let userScore = 0;
  let computerScore = 0;
  let roundsRemaining = 0;
  const computerOptions = ["rock", "paper", "scissors"];
  // Event-Listener für Radio-Buttons
  roundsInput.forEach((input) => {
    input.addEventListener("change", () => {
      startGame(parseInt(input.value));
    });
  });
  // Funktion, um das Spiel zu starten
  function startGame(rounds) {
    roundsRemaining = rounds;
    movesLeft.textContent = `Moves Left: ${roundsRemaining}`;
    // und wenn sie aufhören soll
    if (roundsRemaining === 0) {
    }
  }
  // Event-Listener für Spieloptionen (Stein, Schere, Papier) + Computer random auswahl
  const options = document.querySelectorAll(".rock, .paper, .scissors");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const userChoice = option.value;
      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[choiceNumber];
      console.log(choiceNumber);
      playRound(userChoice, computerChoice);
      console.log(userChoice);
      console.log(computerChoice);
    });
  });

  function playRound(userChoice, computerChoice) {
    const userScoreBoard = document.querySelector(".user");
    const computerScoreBoard = document.querySelector(".comp");
    roundsRemaining--;
    movesLeft.textContent = `Moves Left: ${roundsRemaining}`;
    if (userChoice === computerChoice) {
      resultText.innerHTML = "Tie";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        resultText.innerHTML = "Computer Won";
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
      } else {
        resultText.innerHTML = "User Won";
        userScore++;
        userScoreBoard.innerHTML = userScore;
      }
    }
  }

  // funktion für den restart button
  restartButton.addEventListener("click", () => {});
});
