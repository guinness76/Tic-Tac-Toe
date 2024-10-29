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

let oneOne = " ";
let oneTwo = " ";
let oneThree = " ";
let twoOne = " ";
let twoTwo = " ";
let twoThree = " ";
let threeOne = " ";
let threeTwo = " ";
let threeThree = " ";

function displayGame() {
  console.log(`[${oneOne}][${oneTwo}][${oneThree}]`);
  console.log(`[${twoOne}][${twoTwo}][${twoThree}]`);
  console.log(`[${threeOne}][${threeTwo}][${threeThree}]`);
}

displayGame();

//Loops game until a player wins
while ((matchWin = false)) {
  if (
    currentPlayers[0].playerOneMoves == [] &&
    currentPlayers[1].playerTwoMoves == []
  ) {
    let playerOneTurn = true;
  }

  if (playerOneTurn === true) {
  } else {
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
