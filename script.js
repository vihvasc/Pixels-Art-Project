// 1 - Adicione à página o título "Paleta de Cores".
function criarH1() {
  const novoH1 = document.createElement('h1');
  novoH1.textContent = 'Paleta de Cores';
  novoH1.id = 'title';
  document.getElementById('paleta-de-cores').appendChild(novoH1);
}
criarH1();

// 2 - Adicione à página uma paleta de quatro cores distintas.
// 3 - Adicione a cor preta como a primeira cor da paleta de cores.
// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

// referência: https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  let randomColorString = 'FFFFFF';
  while (randomColorString === 'FFFFFF') {
    randomColorString = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColorString.length < 6) {
      randomColorString = Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  return ('#' + randomColorString);
}

function criarPaleta() {
  const numeroDeCores = 4;
  const paletaDeCores = document.createElement('div');
  paletaDeCores.id = 'color-palette';
  document.getElementById('paleta-de-cores').appendChild(paletaDeCores);

  const cores = [];
  cores[0] = '#000000';

  for (let index = 1; index < numeroDeCores; index += 1) {
    cores[index] = randomColor();
  }

  for (let index = 0; index < numeroDeCores; index += 1) {
    const divColorida = document.createElement('div');
    if (index === 0) {
      divColorida.className = 'color selected';
    } else {
      divColorida.className = 'color';
    }

    divColorida.style.borderColor = 'black';
    divColorida.style.borderStyle = 'solid';
    divColorida.style.borderWidth = '1px';
    divColorida.style.display = 'inline-block';
    divColorida.style.backgroundColor = cores[index];
    divColorida.style.width = '30px';
    divColorida.style.height = '30px';

    paletaDeCores.appendChild(divColorida);
  }
}
criarPaleta();

// 4 - Adicione à página um quadro de pixels, com 25 pixels.
// 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// 11 - Limite o tamanho mínimo e máximo do board.
function criaInputBotao() {
  const botaoVQV = document.createElement('button');
  botaoVQV.id = 'generate-board';
  botaoVQV.innerText = 'VQV';
  const inputQuadro = document.createElement('input');
  inputQuadro.id = 'board-size';
  inputQuadro.type = 'number';
  inputQuadro.min = 1;
  document.getElementById('pixel-art').appendChild(inputQuadro);
  document.getElementById('pixel-art').appendChild(botaoVQV);
}
criaInputBotao();

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function criarBotaoLimpar() {
  const botaoLimpar = document.createElement('button');
  botaoLimpar.id = 'clear-board';
  botaoLimpar.innerText = 'Limpar';
  botaoLimpar.style.display = 'block';
  document.getElementById('pixel-art').appendChild(botaoLimpar);

  botaoLimpar.addEventListener('click', function () {
    const pixelsDoQuadro = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsDoQuadro.length; index += 1) {
      pixelsDoQuadro[index].style.backgroundColor = '#FFFFFF';
    }
  });
}
criarBotaoLimpar();

function criarQuadroPixels() {
  const quadroDePixels = document.createElement('div');
  quadroDePixels.id = 'pixel-board';
  document.getElementById('pixel-art').appendChild(quadroDePixels);
}
criarQuadroPixels();

function criarPixelArt(tamanho) {
  const container = document.getElementById('pixel-board');

  for (let linhas = 0; linhas < tamanho; linhas += 1) {
    const linha = document.createElement('div');
    linha.className = 'lines';
    linha.style.height = '40px';
    container.appendChild(linha);

    for (let colunas = 0; colunas < tamanho; colunas += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      pixel.style.display = 'inline-block';
      pixel.style.backgroundColor = 'white';
      pixel.style.borderColor = 'Black';
      pixel.style.borderWidth = '1px';
      pixel.style.borderStyle = 'solid';
      pixel.style.width = '40px';
      pixel.style.height = '40px';

      linha.appendChild(pixel);
    }
  }
}
criarPixelArt(5);

function removePixelArt() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
  const linhas = document.querySelectorAll('.lines');
  for (let index = 0; index < linhas.length; index += 1) {
    linhas[index].remove();
  }
}

const botaoVQV = document.querySelector('#generate-board');
botaoVQV.addEventListener('click', function() {
  let valorQuadro = document.querySelector('#board-size').value;
  if (!valorQuadro) {
    window.alert('Board inválido!');
    return null;
  } else if (valorQuadro < 5) {
    valorQuadro = 5;
  } else if (valorQuadro > 50) {
    valorQuadro = 50;
  }

  removePixelArt();
  criarPixelArt(valorQuadro);
});

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function selecionarCor() {
  const coresPaleta = document.getElementsByClassName('color');

  for (let index = 0; index < coresPaleta.length; index += 1) {
    coresPaleta[index].addEventListener('click', function () {
      coresPaleta[index].className = 'color selected';
      for(let index2 = 0; index2 < coresPaleta.length; index2 += 1) {
        if (index !== index2) {
          coresPaleta[index2].className = 'color';
        }
      }
    });
  }

}
selecionarCor();

function pintaPixels() {
  const pixelsDoQuadro = document.querySelectorAll('.pixel');
  const coresPaleta = document.getElementsByClassName('color');

  for (let index = 0; index < pixelsDoQuadro.length; index += 1) {
    pixelsDoQuadro[index].addEventListener('click', function () {
      const corSelecionada = document.querySelector('.selected');
      pixelsDoQuadro[index].style.backgroundColor = corSelecionada.style.backgroundColor;
    });
  }
}
pintaPixels();
