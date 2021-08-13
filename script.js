
const blackFirst = document.querySelector('.color-green');
blackFirst.style.backgroundColor = 'rgb(0,0,0)';
blackFirst.classList.add('selected');

let colorsPalette = document.querySelectorAll('.color')

for (let index = 0; index < colorsPalette.length; index += 1) {
  colorsPalette[index].addEventListener('click', getClick);
}

function getClick (originEvent) {
  // let classes =  originEvent.target.classList;
  let selectedBox = document.querySelector('.selected');
  selectedBox.classList.remove('selected');
  originEvent.target.classList.add('selected');
  console.log(originEvent.target.classList);
  console.log(originEvent.target.style.backgroundColor);
}