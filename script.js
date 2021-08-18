const colors = document.getElementsByClassName('color');
const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

function handleColors(event) {
  const selectedColor = event.target;

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  selectedColor.classList.add('selected');
}

black.addEventListener('click', handleColors);
red.addEventListener('click', handleColors);
green.addEventListener('click', handleColors);
blue.addEventListener('click', handleColors);