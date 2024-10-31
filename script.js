function ticTacToe() {
  // Ask for the names of both players
  const playerOne = prompt("Name of Player for X");
  const playerTwo = prompt("Name of Player for O");

  // Object factory function to create players (assign name, icon, and list of moves)
  function players(playerOne, playerTwo) {
    const playerOneName = playerOne;
    const playerOneIcon = "X";
    //Remove moves
    let playerOneMoves = ["oneOne", "oneTwo"];

    const playerTwoName = playerTwo;
    const playerTwoIcon = "O";
    let playerTwoMoves = ["threeOne", "threeTwo"];

    return [
      { playerOneName, playerOneIcon, playerOneMoves },
      { playerTwoName, playerTwoIcon, playerTwoMoves },
    ];
  }

  // Players created with factory function and assigned to currentPlayers variable
  const currentPlayers = players(playerOne, playerTwo);

  console.log(currentPlayers);

  // Empty starting board
  // Remove marks
  let gameboard = {
    oneOne: "X",
    oneTwo: "X",
    oneThree: " ",
    twoOne: " ",
    twoTwo: " ",
    twoThree: " ",
    threeOne: "O",
    threeTwo: "O",
    threeThree: " ",
  };

  // Display game in the console
  function displayGame() {
    console.log(
      `[${gameboard.oneOne}][${gameboard.oneTwo}][${gameboard.oneThree}]`
    );
    console.log(
      `[${gameboard.twoOne}][${gameboard.twoTwo}][${gameboard.twoThree}]`
    );
    console.log(
      `[${gameboard.threeOne}][${gameboard.threeTwo}][${gameboard.threeThree}]`
    );
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
  displayGame();
  let matchTie = false;
  let playerOneTurn = true;
  let turn = 1;
  let winner = "";

  gameFlow();

  function gameFlow() {
    //Loops game until a player wins
    while (matchTie === false) {
      if (turn > 1 && playerOneTurn === true) {
        playerOneTurn = false;
      } else if (turn > 1 && playerOneTurn === false) {
        playerOneTurn = true;
      }

      // Tests
      console.log("Is it player one's turn? ", playerOneTurn);
      console.log("Which turn is it? ", turn);
      console.log(
        "Player one's moves list: ",
        currentPlayers[0].playerOneMoves
      );
      console.log(
        "Player two's moves list: ",
        currentPlayers[1].playerTwoMoves
      );
      //Tests end

      if (playerOneTurn === true) {
        let playerOneChoice = prompt(
          `${playerOne}, which square do you choose?`
        );
        currentPlayers[0].playerOneMoves.push(playerOneChoice);
        gameboard[playerOneChoice] = currentPlayers[0].playerOneIcon;
        if (currentPlayers[0].playerOneMoves.length > 2) {
          console.log("If condition to check for win met.");
          for (let i = 0; i < winConditions; i++) {
            let tempArray = [];
            winConditions[i].map((el) => {
              if (currentPlayers[0].playerOneMoves.includes(el)) {
                tempArray.push(el);
              }
              //Test tempArray
              console.log(tempArray);
              //End Test
              if ((tempArray.length = 3)) {
                return (winner = currentPlayers[0].playerOneName);
              }
            });
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
          let tempArray = [];
          winConditions[i].map((el) => {
            if (currentPlayers[1].playerTwoMoves.includes(el)) {
              tempArray.push(el);
            }
            if ((tempArray.length = 3)) {
              return (winner = currentPlayers[1].playerTwoName);
            }
          });
        }
        displayGame();
      }
      turn++;
      if (turn > 9) {
        console.log("Match is tied!");
        matchTie = true;
      }
    }
  }

  if (winner === currentPlayers[0].playerOneName) {
    console.log(
      "The winner of the Tic-Tac-Toe game is " +
        currentPlayers[0].playerOneName +
        "!"
    );
  } else if (winner === currentPlayers[1].playerTwoName) {
    console.log(
      "The winner of the Tic-Tac-Toe game is " +
        currentPlayers[1].playerTwoName +
        "!"
    );
  }
}

ticTacToe();
