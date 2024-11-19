const oneOne = document.querySelector(".oneOne");
const oneTwo = document.querySelector(".oneTwo");
const oneThree = document.querySelector(".oneThree");
const twoOne = document.querySelector(".twoOne");
const twoTwo = document.querySelector(".twoTwo");
const twoThree = document.querySelector(".twoThree");
const threeOne = document.querySelector(".threeOne");
const threeTwo = document.querySelector(".threeTwo");
const threeThree = document.querySelector(".threeThree");
const playerNames = document.querySelector(".players");
const result = document.querySelector(".result");
const start = document.querySelector("#start");

function ticTacToe() {
  // Ask for the names of both players
  const playerOne = prompt("Name of Player for X");
  const playerTwo = prompt("Name of Player for O");


  // Object factory function to create players (assign name, icon, and list of moves)
  function players(playerOne, playerTwo) {
    const playerOneName = playerOne;
    const playerOneIcon = "X";
    let playerOneMoves = [];

    const playerTwoName = playerTwo;
    const playerTwoIcon = "O";
    let playerTwoMoves = [];

    return [
      { playerOneName, playerOneIcon, playerOneMoves },
      { playerTwoName, playerTwoIcon, playerTwoMoves },
    ];
  }

  // Players created with factory function and assigned to currentPlayers variable
  const currentPlayers = players(playerOne, playerTwo);
  console.log(currentPlayers);

  // const firstplayer = currentPlayers[0].playerOneName;
  // const secondplayer = currentPlayers[1].playerTwoName;
  console.log("Player Text should have shown up by now!")
  playerNames.textContent = `${playerOne}(X) vs. ${playerTwo}(O)`;

  // Empty starting board
  let gameboard = {
    oneOne: " ",
    oneTwo: " ",
    oneThree: " ",
    twoOne: " ",
    twoTwo: " ",
    twoThree: " ",
    threeOne: " ",
    threeTwo: " ",
    threeThree: " ",
  };

  // Display game in the console
  function displayGame() {
    
  }

  // Win conditions array, listing rowColumn
  winConditions = [
    ["oneOne", "oneTwo", "oneThree"],
    ["twoOne", "twoTwo", "twoThree"],
    ["threeOne", "threeTwo", "threeThree"],
    ["oneOne", "twoOne", "threeOne"],
    ["twoOne", "twoTwo", "twoThree"],
    ["threeOne", "threeTwo", "threeThree"],
    ["oneOne", "twoTwo", "threeThree"],
    ["oneThree", "twoTwo", "threeOne"],
  ];

  // Set beginning conditions
  let matchTie = false;
  let playerOneTurn = true;
  let turn = 1;
  let winner = "";

  // gameFlow();

  function gameFlow() {
    //Loops game until a player wins
    while (matchTie === false) {
      if (turn > 1 && playerOneTurn === true) {
        playerOneTurn = false;
      } else if (turn > 1 && playerOneTurn === false) {
        playerOneTurn = true;
      }

      if (playerOneTurn === true) {
        let playerOneChoice = prompt(
          `${playerOne}, which square do you choose?`
        );
        currentPlayers[0].playerOneMoves.push(playerOneChoice);
        gameboard[playerOneChoice] = currentPlayers[0].playerOneIcon;
        if (currentPlayers[0].playerOneMoves.length > 2) {
          console.log("If condition to check for win met.");
          for (let i = 0; i < winConditions.length; i++) {
            let winCount = 0;
            winConditions[i].map((el) => {
              if (currentPlayers[0].playerOneMoves.includes(el)) {
                winCount++;
              }
            });
            console.log("WinCount: ", winCount);

            if (winCount === 3) {
              return (winner = currentPlayers[0].playerOneName);
            }
          }
        }
        displayGame();
      } else if (playerOneTurn === false) {
        let playerTwoChoice = prompt(
          `${playerTwo}, which square do you choose?`
        );
        currentPlayers[1].playerTwoMoves.push(playerTwoChoice);
        gameboard[playerTwoChoice] = currentPlayers[1].playerTwoIcon;
        if (currentPlayers[1].playerTwoMoves.length > 2) {
          for (let i = 0; i < winConditions.length; i++) {
            let winCount = 0;
            winConditions[i].map((el) => {
              if (currentPlayers[1].playerTwoMoves.includes(el)) {
                winCount++;
              }
            });

            if (winCount === 3) {
              return (winner = currentPlayers[1].playerTwoName);
            }
          }
        }
      }
      turn++;
      if (turn > 9) {
        result.textContent = "Match is tied!";
        matchTie = true;
      }
    }
  }

  // if (winner === currentPlayers[0].playerOneName) {
  //   result.textContent =
  //     "The winner of the Tic-Tac-Toe game is " + currentPlayers[0].playerOneName + "!";
  // } else if (winner === currentPlayers[1].playerTwoName) {
  //   result.textContent = "The winner of the Tic-Tac-Toe game is " + currentPlayers[1].playerTwoName + "!";
  // }
}

start.addEventListener("click", () => {
  ticTacToe();
});