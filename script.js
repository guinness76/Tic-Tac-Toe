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

let matchWin = false;

let gameboard = {
  "oneOne": " ",
  "oneTwo": " ",
  "oneThree": " ",
  "twoOne": " ",
  "twoTwo": " ",
  "twoThree": " ",
  "threeOne": " ",
  "threeTwo": " ",
  "threeThree": " ",
}
  
function displayGame() {
  console.log(`[${gameboard["oneOne"]}][${gameboard["oneTwo"]}][${gameboard["oneThree"]}]`);
  console.log(`[${gameboard["twoOne"]}][${gameboard["twoTwo"]}][${gameboard["twoThree"]}]`);
  console.log(`[${gameboard["threeOne"]}][${gameboard["threeTwo"]}][${gameboard["threeThree"]}]`);
}

displayGame();
let playerOneTurn = true;
let turn = 0;

//Loops game until a player wins
while ((matchWin = false)) {
  if (turn > 0) {
    !playerOneTurn;
  } else if (playerOneTurn === true) {
    prompt("Which square do you choose?");
  } else {
    prompt("Which square do you choose?")
  }

  turn++;

  }


  
  // Win conditions array listing rowColumn
  winConditions = [
    [oneOne, oneTwo, oneThree],
    [twoOne, twoTwo, twoThree],
    [threeOne, threeTwo, threeThree],
    [oneOne, twoOne, threeOne],
    [twoOne, twoTwo, twoThree],
    [threeOne, threeTwo, threeThree],
    [oneOne, twoTwo, threeThree],
    [oneThree, twoTwo, threeOne],
  ];
}
