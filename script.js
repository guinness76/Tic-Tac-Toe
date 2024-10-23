// Objects:
//     Player: name, icon(X or O)
//     Gameboard: all nine positions by column and row
//     DisplaytoPlayers

const playerOne = prompt("Name of Player for X");
const playerTwo = prompt("Name of Player for O");

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

const currentPlayers = players(playerOne, playerTwo);

// Gameboard array listing each rowColumn
gameboard = [
  { oneOne: " " },
  { oneTwo: " " },
  { oneThree: " " },
  { twoOne: " " },
  { twoTwo: " " },
  { twoThree: " " },
  { threeOne: " " },
  { threeTwo: " " },
  { threeThree: " " },
];

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
