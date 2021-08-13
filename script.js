// Requisito 1 - Adicionada à página o título "Paleta de Cores".
const header = document.querySelector('header');
const h1Creator = document.createElement('h1');
h1Creator.innerText = 'Paleta de Cores';
h1Creator.id = 'title';
header.appendChild(h1Creator);

// Requisito 2 - Adicionada à página uma paleta de quatro cores distintas.
// Requisito 3 - Adiciona a cor preta como a primeira cor da paleta de cores.
// Requisito 6 - Defini a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// Requisito 12 - Faz com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// Gostaria de agradecer a Gisele pela monitoria por ter me orientado nas
// minhas alterações para ter chegado nas cores dinâmicas
const sectionColorPalette = document.querySelector('#color-palette');

// Função criada pra gerar número aleatórios no intervalos de 0 à 255
function generateAleatoryNumbers() {
  return Math.floor(Math.random() * 256);
}

// Função criada pra gerar as cores alatórias da Paleta de Cores
function generateRGB() {
  const red = generateAleatoryNumbers();
  const green = generateAleatoryNumbers();
  const blue = generateAleatoryNumbers();
  return `rgba(${red}, ${green}, ${blue})`;
}

// Função criada pra poder gerar o array das cores pra Paleta de Cores, que já tem inicializada
// como primeiro item do array a cor preta conforme solicitado no Requisito 3
function createArrayColor() {
  const coresArray = ['black'];
  while (coresArray.length < 4) {
    coresArray.push(generateRGB());
  }
  return coresArray;
}

// Função pra criar a Paleta de Cores conforme solicitado no Requisito 2
function colorPalette() {
  const arrayColor = createArrayColor();
  for (let index = 0; index < arrayColor.length; index += 1) {
    const getDiv = document.createElement('div');
    getDiv.style.backgroundColor = arrayColor[index];
    getDiv.classList.add('color');
    if (index === 0) {
      getDiv.classList.add('selected'); // Trecho que atende as exigências do Requisito 6
    }
    sectionColorPalette.appendChild(getDiv);
  }
}
colorPalette();

// Requisito 4 - Criado o quadro de pixels de forma dinâmica
// Gostaria de agradecer a Gisele Santin por ter me orientado nas
// minhas alterações para obeter o resultado alcançado
function generateBoard(tamanho) {
  const pixelBoardSection = document.querySelector('#pixel-board');

  for (let index = 0; index < tamanho; index += 1) {
    const linePixelBoard = document.createElement('div');
    linePixelBoard.classList.add('linha');
    pixelBoardSection.appendChild(linePixelBoard);

    for (let coluna = 0; coluna < tamanho; coluna += 1) {
      const colunaPixelBoard = document.createElement('div');
      linePixelBoard.appendChild(colunaPixelBoard);
      colunaPixelBoard.classList.add('pixel');
    }
  }
}

generateBoard(5);
