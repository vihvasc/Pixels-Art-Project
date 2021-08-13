const colorPallet = document.createElement('div');
colorPallet.id = 'color-palette';
document.body.appendChild(colorPallet);
const numberOfColors = 4;

for (let i = 0; i < numberOfColors; i += 1) {
  const newDiv = document.createElement('div');
  newDiv.className = 'color';
  colorPallet.appendChild(newDiv);
}

const colorBox = document.getElementsByClassName('color');
const colorSample = ['black', 'red', 'green', 'purple'];

for (let i = 0; i < colorBox.length; i += 1) {
  colorBox[i].style.background = colorSample[i];
}
