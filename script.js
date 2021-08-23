const getColor = document.querySelectorAll('.color');
const getPixel = document.querySelectorAll('.pixel');

// inicializa com a cor de todos os quadrados em branco
for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].style.backgroundColor = 'white';
  //getPixel[index].addEventListener('click', colorPainter)
}

// itera sobre o NodeList da classe color, adicionando um evento em cada objeto, chamando uma função
for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', selectedClass);
}

// event é para acessarmos o target do objeto chamado
function selectedClass(event) {
  // itera sobre os elementos, removendo a classe 'selected'
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].classList.remove('selected');
  }
  getColor[index].style.backgroundColor = getColor[index].style.backgroundColor;

  // event.target é uma propriedade do objeto para adicionarmos alguma coisa nele, nesse caso uma classe
  event.target.classList.add('selected');
}