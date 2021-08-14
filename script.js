window.onload = function windowOnload() {
  console.log('teste');

  const black = document.querySelector('.black');
  const red = document.querySelector('.red');
  const orange = document.querySelector('.orange');
  const yellow = document.querySelector('.yellow');
  const pixelBoard = document.getElementById('pixel-board');
  black.className += 'selected';

  black.addEventListener('click', handleClassChange);
  red.addEventListener('click', handleClassChange);
  orange.addEventListener('click', handleClassChange);
  yellow.addEventListener('click', handleClassChange);
  pixelBoard.addEventListener('click', handleColorChange);

  // console.log(window.getComputedStyle(orange).getPropertyValue('background-color'))

};

function handleClassChange(event) {
  if (event.target.className === 'selected') {
    console.log(event.target.className)
  } else {
    const newColor = document.querySelector('.selected');
    newColor.classList.remove('selected');
    event.target.className += ' selected';
  }
}

function handleColorChange(event) {
  const colorSelected = document.querySelector('.selected'); 
  const getColor = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
  event.target.style.backgroundColor = getColor;
}
