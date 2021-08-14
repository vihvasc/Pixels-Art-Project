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

// Chama função que cria Botão!!!
botaoLimpaQuadro()
usuarioGeraQuadrado();

// Adicione à página um quadro de pixels, com 25 pixels.
// O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
// O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;
// A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
// O quadro de "pixels" deve aparecer abaixo da paleta de cores.

function adicionaContainerPixels() {
  // Início da Função
  const quadroDePixels = document.createElement('div');
  quadroDePixels.id = 'pixel-board';
  quadroDePixels.style.width = '210px';
  quadroDePixels.style.height = '210px';
  document.body.appendChild(quadroDePixels);
}
adicionaContainerPixels();

// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão,
// deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;
//  Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels
// (7 pixels de largura x 7 pixels de altura);

//  O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;
//  O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;
//  O botão deve conter o texto "VQV";
//  O input deve estar posicionado entre a paleta de cores e o quadro de pixels;
//  O botão deve estar posicionado ao lado do input;

// Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";
// O novo quadro deve ter todos os pixels preenchidos com a cor branca.
function usuarioGeraQuadrado() {
  const inputGQ = document.createElement('input');
  inputGQ.id = 'board-size';
  inputGQ.type = 'number';
  inputGQ.min = 1;
  const botaoGQ = document.createElement('button');
  botaoGQ.id = 'generate-board';
  botaoGQ.innerText = 'VQV';
  document.body.appendChild(inputGQ);
  document.body.appendChild(botaoGQ);
  // console.log(inputGQ.innerText); // [DEBUG]
  botaoGQ.addEventListener('click', function() {

    let valorBoard = document.querySelector('#board-size').value;
    if (!valorBoard > 0) {
      window.alert('Board inválido!');
      return null;
    } else if (valorBoard < 5) {
      valorBoard = 5;
    } else if (valorBoard > 50) {
      valorBoard = 50;
    }
    // limpaPixels();
    removeBoard();
    criaPixelsNoContainer(valorBoard, valorBoard);
    preparaPixels();
  } );

}

function removeBoard() {
  pixelsNoQuadro = document.querySelectorAll('.pixel');
  linhaDePixels = document.querySelectorAll('.board-line');

  for (let index = 0; index < pixelsNoQuadro.length; index += 1) {
    pixelsNoQuadro[index].remove();
  }

  for (let index = 0; index < linhaDePixels.length; index += 1) {
    linhaDePixels[index].remove();
  }
}

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
    elementoLinha.style.width = '2100px';
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

// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// O elemento da cor preta deve possuir, inicialmente, a classe selected;
// Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

function firstSelected() {
  let elementoComCorInicial = document.getElementsByClassName('color');
  // console.log(elementoComCorInicial);
  elementoComCorInicial[0].className += " selected";

}
firstSelected();

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;
// Somente uma das cores da paleta deve ter a classe selected de cada vez;
// Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2

function elementoSelecionado() {
  const elementoDaPaleta = document.getElementsByClassName('color');
  // console.log(elementoDaPaleta[0]); // [DEBUG]
  // console.log(elementoDaPaleta[1]); // [DEBUG]
  // console.log(elementoDaPaleta[2]); // [DEBUG]
  // console.log(elementoDaPaleta[3]); // [DEBUG]
  elementoDaPaleta[0].addEventListener('click', function() {
    elementoDaPaleta[0].className = 'color black selected';
    elementoDaPaleta[1].className = 'color red';
    elementoDaPaleta[2].className = 'color green';
    elementoDaPaleta[3].className = 'color blue';
  });
  elementoDaPaleta[1].addEventListener('click', function() {
    elementoDaPaleta[0].className = 'color black';
    elementoDaPaleta[1].className = 'color red selected';
    elementoDaPaleta[2].className = 'color green';
    elementoDaPaleta[3].className = 'color blue';
  });
  elementoDaPaleta[2].addEventListener('click', function() {
    elementoDaPaleta[0].className = 'color black';
    elementoDaPaleta[1].className = 'color red';
    elementoDaPaleta[2].className = 'color green selected';
    elementoDaPaleta[3].className = 'color blue';
  });
  elementoDaPaleta[3].addEventListener('click', function() {
    elementoDaPaleta[0].className = 'color black';
    elementoDaPaleta[1].className = 'color red';
    elementoDaPaleta[2].className = 'color green';
    elementoDaPaleta[3].className = 'color blue selected';
  });
}
elementoSelecionado();

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// O que será verificado:
// Verifica se ao carregar a página deve ser possível pintar os pixels de preto
// Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor
// Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

function preparaPixels() {
  let elementosPixel = document.getElementsByClassName('pixel');
  // console.log(elementosPixel); // [DEBUG]
  for (let index = 0; index < elementosPixel.length; index += 1) {
    elementosPixel[index].addEventListener('click', mePinte);
  }
  function mePinte(index) {
    const corSelecionada = document.getElementsByClassName('selected');
    const corDoElemento = corSelecionada[0].style.backgroundColor;
    // console.log(corDoElemento);
    event.target.style.backgroundColor = corDoElemento;
  }
  // mePinte();
}
preparaPixels();

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// O que será verificado:
// Verifica se o botão tem o id denominado clear-board
// Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels
// Verifica se o texto do botão é 'Limpar'
// Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

function botaoLimpaQuadro() {
  const botaoClear = document.createElement('button');
  botaoClear.id = 'clear-board';
  botaoClear.innerText = 'Limpar';
  botaoClear.addEventListener('click', resetaQuadro );
  document.body.appendChild(botaoClear);
}

function resetaQuadro() {
  const elementosPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementosPixel.length; index += 1) {
    elementosPixel[index].style.backgroundColor = 'white';
  }
}
