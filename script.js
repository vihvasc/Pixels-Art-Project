// Gera cor aleatória para o Desafio 2
function colorGenerator() {
	const req1 = (Math.random() * 256) - 1;
  const req2 = (Math.random() * 256) - 1;
  const req3 = (Math.random() * 256) - 1;

  if (req1 === 255 && req2 === 255 && req3 === 255) {
    return colorGenerator();
  }

  const randomColor = 'rgb(' + req1 + ',' + req2 + ',' + req3 + ')';
  return randomColor;
}

// Verifica se a função acima não tem cor repetida
function colorRepeat() {
  let cores = document.querySelectorAll('.color');
  let newColor = colorGenerator();

  if (cores.length === 0) {
    return newColor;
  }
  for (let i = 0; i < cores.length; i += 1) {
    if (newColor === cores[i]) {
      colorGenerator();
    }
    return newColor;
  }
}

// Desafio 2
function fourDistinctColorPalette(quantCores) {
  const div = document.querySelector('#color-palette');

  for (let i = 1; i <= quantCores; i += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';

    palette.style.backgroundColor = colorRepeat();
    palette.style.border = '1px solid black';
    div.appendChild(palette);		
  }
}

fourDistinctColorPalette(4);

// Desafio 3
function firstColorBlack() {
  let cores = document.querySelectorAll('.color');
  let tornaPreto = cores[0];

  tornaPreto.style.backgroundColor = 'black';
}

firstColorBlack();

// Desafio 4
function quadroDePixels(tamanho) {
  let quadroPixel = document.querySelector('#pixel-board');

  for (let index = 1; index <= tamanho; index += 1) {
    let linhaPixel = document.createElement('div');
    let contador = 1;
    linhaPixel.className = 'newDiv';

    for (let i = 1; i <= tamanho; i += 1) {
      let pixelL = document.createElement('div');

      pixelL.className = 'pixel';
      pixelL.style.backgroundColor = 'white';
      linhaPixel.appendChild(pixelL);
    }

    contador += 1;
    quadroPixel.appendChild(linhaPixel);
    firstPick();
    paintPixels();
	}
}

quadroDePixels(5);

// Desafio 6
function firstPick() {
  let standardColor = document.querySelector('.color');

  standardColor.classList.add('selected');
}

// Desafio 7
function selectColor() {
  let colorList = document.querySelectorAll('.color');

  for (let z = 0; z <colorList.length; z += 1) {
		let button = colorList[z];

    button.addEventListener('click', function semuso1() {
			for (let i = 0; i < colorList.length; i += 1) {
      colorList[i].classList.remove('selected');
      }
      button.classList.add('selected');
    });
  }
}

selectColor();

// Desafio 8
function paintPixels() {
  let pixelList = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixelList.length; i += 1) {
		let pixelSelected = pixelList[i];

    pixelSelected.addEventListener('click', function semuso2(){
      let colorItem = document.querySelector('.selected');
      let colorSelected = colorItem.style.backgroundColor;

      pixelSelected.style.backgroundColor = colorSelected;
    });
  }
}

// Desafio 9
function clearButton() {
  let button = document.getElementById('clear-board');
  let board = document.querySelectorAll('.pixel');

	button.addEventListener('click', function(){
		for (let i = 0; i < board.length; i += 1) {
			board[i].style.backgroundColor = 'white';
		}
	});
}

clearButton();

// Desafio 10
function resizeBoard() {
  let input = document.getElementById('board-size');
  let button = document.getElementById('generate-board');

  button.addEventListener('click', function semuso3(){
    const entrada = input.value;
    let size = document.getElementById('pixel-board')

    if (entrada === '') {
      alert('Board inválido!');
		} else if(entrada >= 1 && entrada <= 5) {
			size.innerHTML = '';
			quadroDePixels(5);
		} else if(entrada >= 50) {
			size.innerHTML = '';
			quadroDePixels(50);
		} else if(entrada > 5 && entrada < 50) {
			size.innerHTML = '';
			quadroDePixels(entrada);
		}
	});
}

resizeBoard();
