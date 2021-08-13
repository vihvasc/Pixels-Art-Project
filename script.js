// 01. Adicione à página o título "Paleta de Cores".
// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
function criarElementoH1() {
  const novoH1 = document.createElement('h1');
  novoH1.textContent = 'Paleta de Cores';
  novoH1.id = 'title';

  document.body.appendChild(novoH1);
}
criarElementoH1();

// 02. Adicione à página uma paleta de quatro cores distintas.
// A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;
// A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
// Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
// A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

function criarPaletaCores() {
  const paletaCores = document.createElement('div');
  paletaCores.id = 'color-palette';
  const totalCores = 4;
  const coresDaPaleta = ['black', 'red', 'green', 'blue'];
  document.body.appendChild(paletaCores);
  // Separador
  for (let index = 0; index < totalCores; index += 1) {
    const novaCor = document.createElement('div');
    novaCor.className = 'color ' + coresDaPaleta[index];
    novaCor.style.borderColor = 'black';
    novaCor.style.borderStyle = 'solid';
    novaCor.style.borderWidth = '1px';
    novaCor.style.display = 'inline-block';
    novaCor.style.backgroundColor = coresDaPaleta[index];
    novaCor.style.width = '30px';
    novaCor.style.height = '30px';
    paletaCores.appendChild(novaCor);
  }
}
criarPaletaCores();

// Adicione à página um quadro de pixels, com 25 pixels.
// O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
// O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;
// A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
// O quadro de "pixels" deve aparecer abaixo da paleta de cores.

function adicionaContainerPixels() {
  // Início da Função
  const quadroDePixels = document.createElement('div');
  quadroDePixels.id = 'pixel-board';
  quadroDePixels.style.width = '200px';
  quadroDePixels.style.height = '200px';
  document.body.appendChild(quadroDePixels);
}
adicionaContainerPixels();

function criaPixelsNoContainer(linhas, colunas) {
  const containerPixel = document.getElementById('pixel-board');
  // console.log(containerPixel); // [DEBUG]
  const elementosLinha = linhas;
  const elementosColuna = colunas;
  
  for (let indexl = 0; indexl < elementosLinha; indexl += 1) {
    const elementoLinha = document.createElement('div');
    elementoLinha.className = 'board-line';
    // elementoLinha.style.display = 'inline-block';
    elementoLinha.style.backgroundColor = 'white';
    elementoLinha.style.width = '210px';
    elementoLinha.style.height = '40px';
    containerPixel.appendChild(elementoLinha);
    for (let indexc = 0; indexc < elementosColuna; indexc += 1) {
      const elementoColuna = document.createElement('div');
      elementoColuna.className = 'pixel';
      elementoColuna.style.display = 'inline-block';
      elementoColuna.style.backgroundColor = 'white';
      elementoColuna.style.width = '40px';
      elementoColuna.style.height = '40px';
      elementoColuna.style.borderColor = 'Black';
      elementoColuna.style.borderWidth = '1px';
      elementoColuna.style.borderStyle = 'solid';
      // elementoColuna.innerText = indexl + '' + indexc ; // [DEBUG] Vvisualização do Elemento na Página.
      elementoLinha.appendChild(elementoColuna);
    }
  }
}
criaPixelsNoContainer(5, 5);

// 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura [OK]
// e seja delimitado por uma borda preta de 1 pixel. [OK]
// O que será verificado: [OK]
// Verifica se o quadro de pixels tem altura e comprimento de 5 elementos [OK]
// Verifica se 40 pixels é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte. [OK]
// Requisito 05 Feito modificando a função acima deste Bloco de Comentários!!!