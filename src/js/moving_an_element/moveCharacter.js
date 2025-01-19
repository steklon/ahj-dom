import Game from "./Game";

export function moveCharacter(currentPosition, position) {
  let newPosition;

  do {
    newPosition = position.getRandomPosition();
  } while (
    newPosition.row === currentPosition.row &&
    newPosition.col === currentPosition.col
  );

  currentPosition.row = newPosition.row;
  currentPosition.col = newPosition.col;

  // console.log(`Current Position: ${currentPosition.row}, ${currentPosition.col}`);
  // console.log(`New Position: ${newPosition.row}, ${newPosition.col}`);

  position.setCharacterPosition(currentPosition.row, currentPosition.col);
}

export default function start() {
  let position = new Game();
  let currentPosition = position.getRandomPosition();

  position.setCharacterPosition(currentPosition.row, currentPosition.col);
  setInterval(() => moveCharacter(currentPosition, position), 1000);
}
