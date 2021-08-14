const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');
const colorPalette = document.querySelector('#color-palette');

function selectColor() {
  colorPalette.addEventListener('click', (event) => {
    if (event.target !== colorPalette) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();


pixelBoard.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  const computedStyle = getComputedStyle(selectedColor);
  const color = computedStyle.getPropertyValue('background-color');

  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = color;
  }
});

clearButton.addEventListener('click', (event)=>{
for (const i of pixels) {
  i.style.backgroundColor = 'white';
}
});
