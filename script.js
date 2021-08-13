function handleColorClick(event) {
  const currentSelected = document.querySelector('.selected');
  const newSelected = event.target;
  currentSelected.classList.remove('selected');
  newSelected.classList.add('selected');
}

function handlePixelClick(event) {
  const pixel = event.target;
  const selectedColorInPallette = document.querySelector('.selected');
  const selectedColorComputedStyle = window.getComputedStyle(selectedColorInPallette, null);
  const selectedColor = selectedColorComputedStyle.getPropertyValue('background-color');
  pixel.style.backgroundColor = selectedColor;
}

function load() {
  const colors = document.getElementsByClassName('color');
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', handleColorClick);
  }

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', handlePixelClick);
  }
}

window.onload = load;
