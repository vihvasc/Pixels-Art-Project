function setupGrid(y, x, pixelSize) {
  let numberOfSquares = y * x;
  let squareSize = pixelSize;

  let grid = document.createElement('div');
  document.body.appendChild(grid);

  grid.id = 'pixel-board';
  grid.style.width = `${x * squareSize} px`;
  grid.style.height = `${y * squareSize} px`;

  for (let index = 0; index < numberOfSquares; index++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = `${squareSize} px`;
    pixel.style.height = `${squareSize} px`;
    pixel.style.backgroundColor = 'white';

    grid.appendChild(pixel);
  }

  console.log(
    `Created a grid of ${x} by ${y} with a size of ${squareSize} px.`
  );
}

setupGrid(5, 5, 32);
