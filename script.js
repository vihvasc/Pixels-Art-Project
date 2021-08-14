const test = document.querySelector('#pixel-board');

const firstColor = document.getElementById('firstColor');
firstColor.classList.add('selected');

const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourthColor = document.getElementById('fourthColor');

const clearButton = document.getElementById('clear-board');

function createPixelDivs(param1) {
  let lengthDivs;
  let widthDivs;
  for (let index = 0; index < param1; index += 1) {
    lengthDivs = document.createElement('div');
    for (let index2 = 0; index2 < param1; index2 += 1) {
      widthDivs = document.createElement('div');
      widthDivs.classList = 'pixel';
      lengthDivs.appendChild(widthDivs);
    }
    test.appendChild(lengthDivs);
  }
}

function addAndRemoveClassSelected(event) {
  const addAndRemove = document.querySelector('.selected');
  addAndRemove.classList.remove('selected');

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

/* https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp */

function buttonClear() {
  const clearPixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < clearPixels.length; index += 1) {
    clearPixels[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', buttonClear);

window.onload = () => {
  createPixelDivs(5);
  selectionColor();
};
