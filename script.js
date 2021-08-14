function selectColor() {
  const colorPalette = document.querySelector('#color-palette');

  colorPalette.addEventListener('click', (event) => {
    if (event.target !== colorPalette) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectColor();

// function selectColor() {
//   const colorPalette = document.querySelector('#color-palette');
//   const paletteElement = document.querySelectorAll('.color')

//   colorPalette.addEventListener('click', (event) => {
//     const selected = document.querySelector('.selected');
//     paletteElement.classList.add('selected');
//     selected.classList.remove('selected');
//   });
// }

// selectColor();