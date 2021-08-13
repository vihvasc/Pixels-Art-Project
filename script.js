function startPage() {
  const parent = document.getElementById('color-palette').children;
  parent[0].style.backgroundColor = 'black';
  parent[1].style.backgroundColor = 'green';
  parent[2].style.backgroundColor = 'gold';
  parent[3].style.backgroundColor = 'blue';
  parent[0].classList.add('selected');
}

startPage();

function selectColorInPalette(event) {
  if (event.target.className === 'color') {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function selectPalette() {
  const parent = document.getElementById('color-palette');
  parent.addEventListener('click', selectColorInPalette);
}

selectPalette();

function paintSquareInBoard(event) {
  if(event.target.className === 'pixel') {
    const selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

function paintSquares() {
  const parent = document.getElementById('pixel-board');
  parent.addEventListener('click', paintSquareInBoard);
}

paintSquares();
