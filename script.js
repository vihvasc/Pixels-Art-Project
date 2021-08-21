// fiz a tabela baseada nesse video https://www.youtube.com/watch?v=-dGWaHA3ud8
let botao = document.querySelectorAll('button')
let color = document.querySelectorAll('.color')
let primeiraCor = color[0] // pegando o primeiro color
let selected = document.querySelector('.selected')
let Preto = document.getElementById('PRETO')
let Azul = document.getElementById('AZUL')
let Vermelho = document.getElementById('VERMELHO')
let Amarelo = document.getElementById('AMARELO')




function criarLinhas() {
  for (let index = 0; index < 5; index++) {
    const tabela = document.getElementById('pixel-board');
    const divs = document.createElement('div');
    tabela.appendChild(divs);

    for (let i = 0; i < 5; i++) {
      const sessao = document.createElement('div');
      sessao.classList.add('pixel');
      divs.appendChild(sessao);
    }
  }
}

function selecionar() {

  for (let index = 0; index < color.length; index++) {
    color[index].addEventListener('click', function (event) {
      primeiraCor.classList.remove('selected')
      event.target.classList.add('selected')
      primeiraCor = event.target
    })
  }

}
function pixelColor() {
  let pixel = document.querySelectorAll('.pixel')
  for (let index = 0; index < pixel.length; index++) {

    pixel[index].addEventListener('click', function () {
      pixel[index].className = 'pixel'
      if (Preto.classList.contains('selected') === true) {

        pixel[index].classList.add('preto')

      }
      else if (Amarelo.classList.contains('selected') === true) {
        pixel[index].classList.add('amarelo')
      }
      else if (Vermelho.classList.contains('selected') === true) {
        pixel[index].classList.add('vermelho')
      }
      else if (Azul.classList.contains('selected') === true) {
        pixel[index].classList.add('azul')
        console.log('azul')
      }
    })
  }
}
criarLinhas()
selecionar()
pixelColor()