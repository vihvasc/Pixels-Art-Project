function selectColor() {
  const defaultColor = document.getElementById('black');
  defaultColor.className += ' selected';
}
selectColor();

function squareOfPixels() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';
    document.body.appendChild(line);
    console.log(line);

    for (let index = 0; index < 5; index += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      column.style.backgroundColor = 'white';
      line.appendChild(column);
      console.log(column);
    }
  }
}
squareOfPixels();
