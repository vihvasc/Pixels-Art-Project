const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
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

function paint(eventPaint) {
  const paintpixel = eventPaint.target;
  const selector = document.querySelector('.selected');
  const currentColor = window.getComputedStyle(selector);
  paintpixel.style.backgroundColor = currentColor.backgroundColor;
  console.log(currentColor.backgroundColor);
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paint);
}