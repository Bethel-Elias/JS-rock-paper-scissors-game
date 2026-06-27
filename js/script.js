const VALID_CHOICES = ["rock", "paper", "scissors"];
const QUIT_COMMAND = "quit";
const TOTAL_ROUNDS = 5;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function normalizeSelection(selection) {
  return selection.trim().toLowerCase();
}

function isWinningChoice(playerSelection, computerSelection) {
  return (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  );
}

function isValidChoice(selection) {
  return VALID_CHOICES.includes(selection);
}

function isQuitCommand(selection) {
  return selection === QUIT_COMMAND;
}

function getInstructionsMessage() {
  return (
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
}

function showInstructions() {
  alert(getInstructionsMessage());
}

function getRoundPromptMessage(roundNumber) {
  return (
    `Round ${roundNumber}: Enter rock, paper, or scissors.\n` +
    `Type ${QUIT_COMMAND} or click Cancel to exit.`
  );
}

function getPlayerInput(roundNumber) {
  return prompt(getRoundPromptMessage(roundNumber));
}

function parsePlayerSelection(input) {
  if (input === null) {
    return { status: "cancel"};
  }

  const selection = normalizeSelection(input);

  if (selection === "") {
    return {
      status: "empty",
      message: "You entered nothing. Please type rock, paper, or scissors.",
    };
  }

  if (!selection) {
    return { status: "invalid", message: "Invalid input! Round repeated." };
  }

  if (isQuitCommand(selection)) {
    return { status: "quit", message: "Game ended by user." };
  }

  if (!isValidChoice(selection)) {
    return { status: "invalid", message: "Invalid choice! Round repeated." };
  }

  return { status: "valid", selection };
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerSelection}`;
  }

  if (isWinningChoice(playerSelection, computerSelection)) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function getScoreChange(result) {
  if (result.startsWith("You Win!")) {
    return { player: 1, computer: 0 };
  }

  if (result.startsWith("You Lose!")) {
    return { player: 0, computer: 1 };
  }

  return { player: 0, computer: 0 };
}

function logRoundOutcome(playerSelection, computerSelection, result, score) {
  console.log(`You: ${playerSelection} | Computer: ${computerSelection}`);
  console.log(result);
  console.log(`Score => Player: ${score.player}, Computer: ${score.computer}`);
  console.log("=======================");
}

function logFinalResult(playerScore, computerScore) {
  console.log("=== FINAL RESULT ===");

  if (playerScore > computerScore) {
    console.log("You won the game!");
    return;
  }

  if (computerScore > playerScore) {
    console.log("Computer won the game!");
    return;
  }

  console.log("The game is a tie!");
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  showInstructions();
  console.log("Welcome to Rock Paper Scissors Game!");

  for (let roundNumber = 1; roundNumber <= TOTAL_ROUNDS; ) {
    const input = getPlayerInput(roundNumber);
    const parsedSelection = parsePlayerSelection(input);

    if (parsedSelection.status === "cancel") {
      console.log("Game canceled by user.");
      return;
    }

    if (parsedSelection.status === "quit") {
      console.log("Game ended by user.");
      return;
    }

    if (parsedSelection.status === "invalid") {
      console.log(parsedSelection.message);
      continue;
    }

    const playerSelection = parsedSelection.selection;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    const scoreChange = getScoreChange(result);

    playerScore += scoreChange.player;
    computerScore += scoreChange.computer;

    logRoundOutcome(playerSelection, computerSelection, result, {
      player: playerScore,
      computer: computerScore,
    });

    roundNumber++;
  }

  logFinalResult(playerScore, computerScore);
}

game();
