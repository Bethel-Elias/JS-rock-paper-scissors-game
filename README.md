# Rock Paper Scissors Game

A simple Rock Paper Scissors game made with JavaScript.

The player plays against the computer for 5 rounds. The computer randomly chooses rock, paper, or scissors.

## Project Structure

```text
rock-paper-scissors/
│
├── index.html
├── README.md
└── js/
    └── script.js
```

## How to Run

1. Open the project folder.
2. Double-click `index.html`.
3. The game will start with browser prompts.
4. Enter one of these choices:

```text
rock
paper
scissors
```

5. Open the browser console to see the round results and score:

```text
F12 → Console
```

## Features

* Random computer choice
* 5 rounds per game
* Player and computer score tracking
* Input validation
* Repeats the round when the input is invalid
* Shows the final winner at the end

## Technologies Used

* HTML
* JavaScript

## How the Game Works

* Rock beats scissors
* Scissors beats paper
* Paper beats rock
* Same choice means a tie
