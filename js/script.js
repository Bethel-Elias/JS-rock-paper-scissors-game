// computerPlay function that randomly returns rock, paper, or scissors

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// console.log(computerPlay());

// playRound function that takes playerSelection and computerSelection as parameters and returns the result of the round

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerSelection}`;
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// game function that plays 5 rounds of rock-paper-scissors and keeps track of the score

function game() {
  let playerScore = 0;
  let computerScore = 0;

  alert(
    "Rock Paper Scissors\n\n" +
      "How to play:\n" +
      "- Enter rock, paper, or scissors when prompted.\n" +
      "- Enter quit or click Cancel to leave the game.\n" +
      "- The game counts 5 valid rounds.\n" +
      "- Invalid input repeats the round.\n\n" +
      "How to see results:\n" +
      "- Open the browser console.\n" +
      "- Windows/Linux: F12 or Ctrl+Shift+I\n" +
      "- Mac: Cmd+Option+I\n" +
      "- Click the Console tab to watch the score and round results."
  );

  console.log("Welcome to Rock Paper Scissors Game!");

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      `Round ${i}: Enter rock, paper, or scissors.\nType quit or click Cancel to exit.`
    );

    if (playerSelection === null) {
      console.log("Game canceled by user.");
      return;
    }

    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection === "quit") {
      console.log("Game ended by user.");
      return;
    }

    if (!playerSelection) {
      console.log("Invalid input! Round repeated.");
      i--;
      continue;
    }

    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      console.log("Invalid choice! Round repeated.");
      i--;
      continue;
    }

    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);

    console.log(`You: ${playerSelection} | Computer: ${computerSelection}`);
    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }

    console.log(`Score => Player: ${playerScore}, Computer: ${computerScore}`);
    console.log("=======================");
  }

  console.log("=== FINAL RESULT ===");

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}
game();
