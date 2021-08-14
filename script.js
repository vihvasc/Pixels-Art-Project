const test = document.querySelector('#pixel-board');
const firstColor = document.getElementById('firstColor');
firstColor.classList.add('selected');

const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourthColor = document.getElementById('fourthColor');

function createPixelDivs(param1) {
  let lengthDivs;
  const yHeight = param1;
  const xWidth = param1;

  for (let index = 0; index < yHeight * xWidth; index += 1) {
    lengthDivs = document.createElement('div');
    test.appendChild(lengthDivs);
    lengthDivs.classList = 'pixel';
  }
}
createPixelDivs(5);

function addAndRemoveClassSelected(event) {
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');

  event.target.classList.add('selected');
}
firstColor.addEventListener('click', addAndRemoveClassSelected);
secondColor.addEventListener('click', addAndRemoveClassSelected);
thirdColor.addEventListener('click', addAndRemoveClassSelected);
fourthColor.addEventListener('click', addAndRemoveClassSelected);

function selectionColor() {
  const select = document.querySelectorAll('.pixel');

  for (let index = 0; index < select.length; index += 1) {
    select[index].addEventListener('click', () => {
      const elem = document.querySelector('.selected');
      const theCSSprop = window.getComputedStyle(elem, null).getPropertyValue('background-color');
      select[index].style.backgroundColor = theCSSprop;
    });
  }
}
selectionColor();

/* https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp */

function toColor() {
  const colorirPixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < colorirPixel.length; index += 1) {
    colorirPixel[index].addEventListener('click', selectionColor);
  }
}
toColor();
