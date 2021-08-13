const colors = document.querySelectorAll('.color');
const colorsArray = Array.from(colors);
const colorsArrayLength = colorsArray.length;
const blackColor = colorsArray[0];
blackColor.classList.add('selected');

function addSelected(originEvent) {
  const element = originEvent.target;
  for (let counter = 0; counter < colorsArrayLength; counter += 1) {
    if (colorsArray[counter].classList.contains('selected')) {
      colorsArray[counter].classList.remove('selected');
    }
  }
  element.classList.add('selected');
  console.log(colorsArray[0].classList)
}

for (let index = 0; index < colorsArrayLength; index += 1) {
  colorsArray[index].addEventListener('click', addSelected);
}
