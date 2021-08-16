//1 - Adicione à página o título "Paleta de Cores".
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
    randomColorString = Math.floor(Math.random()*16777215).toString(16);
    while (randomColorString.length < 6) {
      randomColorString = Math.floor(Math.random()*16777215).toString(16);
    }
  }
  return ('#' + randomColorString);
}

function criarPaleta() {
  let numeroDeCores = 4;
  const paletaDeCores = document.createElement('div');
  paletaDeCores.id = 'color-palette';
  document.getElementById('paleta-de-cores').appendChild(paletaDeCores);

   let cores = [];
   cores[0] = '#000000';

  for(let index = 1; index < numeroDeCores; index += 1) {
    cores[index] = randomColor();
  }

  for(let index = 0; index < numeroDeCores; index += 1) {
    const divColorida = document.createElement('div');
    divColorida.className = 'color';

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

function criarQuadroPixels() {
  const quadroDePixels = document.createElement('div');
  quadroDePixels.id = 'pixel-board';
  document.getElementById('pixel-art').appendChild(quadroDePixels);
}
criarQuadroPixels();

function criarPixelArt(tamanho) {
  const container = document.getElementById('pixel-board');

  for(let linhas = 0; linhas < tamanho; linhas += 1) {
    let linha = document.createElement('div');
    linha.className = 'lines';
    linha.style.height = '40px';
    container.appendChild(linha);

    for(let colunas = 0; colunas < tamanho; colunas += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';

      pixel.style.display = 'inline-block';
      pixel.style.backgroundColor = 'white';
      pixel.style.width = '40px';
      pixel.style.height = '40px';
      pixel.style.borderColor = 'Black';
      pixel.style.borderWidth = '1px';
      pixel.style.borderStyle = 'solid';

      linha.appendChild(pixel);
    }
  }
}
criarPixelArt(5);

function removePixelArt() {
  let pixels = document.querySelectorAll('.pixel');
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
  let linhas = document.querySelectorAll('.lines');
  for (index = 0; index < linhas.length; index += 1) {
    linhas[index].remove();
  }
}

valorQuadro = document.querySelector('#board-size');
botaoVQV = document.querySelector('#generate-board');
botaoVQV.addEventListener('click', function() {
  let valorQuadro = document.querySelector('#board-size').value;
  if(!valorQuadro) {
    window.alert('Board inválido!');
    return null;
  } else if(valorQuadro < 5) {
    valorQuadro = 5;
  } else if(valorQuadro > 50) {
    valorQuadro = 50;
  }

  removePixelArt();
  criarPixelArt(valorQuadro);
})
