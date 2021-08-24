window.onload = function() {
  corBox();
  selectedFix();
  gerarTabela(5);
}

// Colorir paleta
function corBox(){
  let color = document.querySelectorAll('.color');
  let arrayColor = ['black', 'green', 'yellow', 'purple', 'pink', 'red', 'blue', 'gray'];
  let arrayColorSortido = [];
  let colorFinal = [];
  let numRepeticao = 100;

  for (let index = 0; index < numRepeticao; index += 1) {
    if (colorFinal.length < 4) {
      if (index === 0) {
        arrayColorSortido[index] = arrayColor[0];
      } else {
        arrayColorSortido[index] = arrayColor[Math.floor((Math.random() * arrayColor.length)) ];
        colorFinal = [...new Set(arrayColorSortido)];
      }
    }
  }

  for (let index = 0; index < colorFinal.length; index += 1) {
    color[index].style.backgroundColor = colorFinal[index];
  }

}

// Cor Preta selecionada
function selectedFix() {
  let botaoBlack = 0;
  let fixo = document.querySelectorAll('.color');
  fixo[botaoBlack].classList.add ('selected');
}

// Escolher quantidade de linhas/colunas
let botaoNumero = document.getElementById('generate-board');
botaoNumero.addEventListener('click', function() {
  let numeroDigitado = document.getElementById('board-size').value;
  let removerTabela = document.querySelectorAll('#pixel-board');
  if (numeroDigitado < 5) {
    numeroDigitado = 5;
    for (let index = 0; index < removerTabela.length; index += 1) {
      removerTabela[index].remove();      
    }
    gerarTabela(numeroDigitado);
    alert('Board inválido! Digite um numero entre 5 e 50.');
  } else if  (numeroDigitado > 50) {
    numeroDigitado = 50;
    for (let index = 0; index < removerTabela.length; index += 1) {
      removerTabela[index].remove();      
    }
    gerarTabela(numeroDigitado);
      alert('Board inválido! Digite um numero entre 5 e 50.');
    } else {    
      for (let index = 0; index < removerTabela.length; index += 1) {
        removerTabela[index].remove();      
    }
    gerarTabela(numeroDigitado);
   }
});

// Gera tabela
function gerarTabela(numeroDigitado) {
  for (let index = 1; index <= numeroDigitado; index += 1) {
    let secao = document.querySelector('.tabela');
    let tabela = document.createElement('ul');

    for (let index2 = 1; index2 <= numeroDigitado; index2 += 1) {
      let li = document.createElement('li');
      li.className = 'pixel';
      tabela.appendChild(li);
    }
    tabela.id = 'pixel-board';
    secao.appendChild(tabela);
  }
  colorirBox();
  limpar();
  corBox();
  selectedFix()
}

// Selecionar Box
let seletor = document.querySelectorAll('.color');
for (let index = 0; index < seletor.length; index += 1) {
  seletor[index].addEventListener('click', function() {
  let botao = document.querySelector('.selected');
  botao.classList.remove('selected');
  event.target.classList.add('selected');
  })
}

// Colorir Box
function colorirBox(){
  let colorir = document.querySelectorAll('.pixel');
  let botao2 = document.getElementsByClassName('selected');

  for (let index = 0; index < colorir.length; index += 1) {
    colorir[index].addEventListener('click', function(event) {
    colorir[index].style.backgroundColor = botao2[0].style.backgroundColor;
    })
  }
}

// Limpar quadro
function limpar() {
  let limpar = document.querySelector('#clear-board');
  let colorir = document.querySelectorAll('.pixel');
  limpar.addEventListener('click', function() {
    for (let index = 0; index < colorir.length; index += 1) {
    colorir[index].style.backgroundColor = 'white';
    }
  })
}
