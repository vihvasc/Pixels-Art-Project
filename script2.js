let getColor = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let corSelecionada = document.querySelector('.selected');

getColor[0].style.backgroundColor = 'black';
getColor[1].style.backgroundColor = 'purple';
getColor[2].style.backgroundColor = 'yellow';
getColor[3].style.backgroundColor = 'orange';

function selectedClass(event) {
  for (let i = 0; i < getColor.length; i += 1) {
    getColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  corSelecionada = event.target;
}

for (let i = 0; i < getColor.length; i += 1) {
  getColor[i].addEventListener('click', selectedClass);
}

function pintar() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels){
    pixel.addEventListener('click', function() 
    {pixel.style.backgroundColor = corSelecionada.style.backgroundColor});
  }
}
pintar();

function limparQuadro() {
  let limparPixel = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels){
    limparPixel.addEventListener('click', function() 
    {pixel.style.backgroundColor = 'white'});
 }
}
limparQuadro();