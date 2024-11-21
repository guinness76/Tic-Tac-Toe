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
const instructions = document.querySelector(".instructions");
const start = document.querySelector("#start");


oneOne.addEventListener("click", () => {
  squareId = "oneOne";
});

oneTwo.addEventListener("click", () => {
  squareId = "oneTwo";
});

oneThree.addEventListener("click", () => {
  squareId = "oneThree";
});

twoOne.addEventListener("click", () => {
  squareId = "twoOne";
});

twoTwo.addEventListener("click", () => {
  squareId = "twoTwo";
});

twoThree.addEventListener("click", () => {
  squareId = "twoThree";
});

threeOne.addEventListener("click", () => {
  squareId = "threeOne";
});

threeTwo.addEventListener("click", () => {
  squareId = "threeTwo";
});

threeThree.addEventListener("click", () => {
  squareId = "threeThree";
});

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

  playerNames.textContent = `${playerOne}(X) vs. ${playerTwo}(O)`;

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
  let gamelog = [];
  let squareId = "";

  gameFlow();

  function gameFlow() {
    //Loops game until a player wins
    while (matchTie === false) {
      if (turn > 1 && playerOneTurn === true) {
        playerOneTurn = false;
      } else if (turn > 1 && playerOneTurn === false) {
        playerOneTurn = true;
      }

      if (playerOneTurn === true) {
        
        //DANGEROUS!!!
        
        // while (squareId === "") {
        //   instructions.textContent = `${playerOne}, which square do you choose?`;
        // }
        
        currentPlayers[0].playerOneMoves.push(squareId);
        document.querySelector(`.${squareId}`).textContent = currentPlayers[0].playerOneIcon;
        gamelog.push(squareId);

        if (currentPlayers[0].playerOneMoves.length > 2) {
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
        squareId === "";

      } else if (playerOneTurn === false) {
        // Turn for testing purposes
        turn = 9;
        // instructions.textContent = `${playerTwo}, which square do you choose?`;
        
        // currentPlayers[1].playerTwoMoves.push(playerTwoChoice);
        // gameboard[playerTwoChoice] = currentPlayers[1].playerTwoIcon;
        
        // if (currentPlayers[1].playerTwoMoves.length > 2) {
        //   for (let i = 0; i < winConditions.length; i++) {
        //     let winCount = 0;
        //     winConditions[i].map((el) => {
        //       if (currentPlayers[1].playerTwoMoves.includes(el)) {
        //         winCount++;
        //       }
        //     });

        //     if (winCount === 3) {
        //       return (winner = currentPlayers[1].playerTwoName);
        //     }
        //   }
        // }
      }
      turn++;
      if (turn > 9) {
        instructions.textContent = "Match is tied!";
        matchTie = true;
      }
    }
  }

  if (winner === currentPlayers[0].playerOneName) {
    instructions.textContent =
      "The winner of the Tic-Tac-Toe game is " + currentPlayers[0].playerOneName + "!";
  } else if (winner === currentPlayers[1].playerTwoName) {
    instructions.textContent = "The winner of the Tic-Tac-Toe game is " + currentPlayers[1].playerTwoName + "!";
  }
}

start.addEventListener("click", () => {
  ticTacToe();
});