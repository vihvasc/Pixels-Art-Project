function setupGrid(y, x, pixelSize) {
  let grid = document.createElement('div');
  document.body.appendChild(grid);

  document.documentElement.style.setProperty('--pixel-size', pixelSize + 'px');

  grid.id = `pixel-board`;
  grid.style.maxWidth = `${x * pixelSize} px`;
  grid.style.maxHeight = `${y * pixelSize} px`;

  for (let index = 0; index < x; index++) {
    let line = document.createElement('div');
    line.style.display = 'flex';
    for (let index = 0; index < y; index++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixel.style.border = '1px solid black';

      line.appendChild(pixel);
    }
    grid.appendChild(line);
  }

  console.log(`Created a grid of ${x} by ${y} with a size of ${pixelSize} px.`);
}

setupGrid(5, 5, 40);

let palette = document.querySelectorAll('.color');

palette.forEach((e) => {
  e.addEventListener('click', (e) => {
    let selectedColor = document.querySelector('.selected');
    selectedColor.className = 'color';
    console.log('clicked' + e.target);
    e.target.className = 'color selected';
  });
});
