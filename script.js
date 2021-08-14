const getColor = document.querySelectorAll('.color');
const getPixel = document.querySelectorAll('.pixel');

// inicializa com a cor de todos os quadrados em branco
for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].style.backgroundColor = 'white';
}

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', selectedClass);
}

function selectedClass(event) {
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].classList.remove('selected')
  }
  event.target.classList.add('selected')
}
