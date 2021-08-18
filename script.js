window.onload = function() {
  makeLines(5);
  let blackColor = document.getElementById('1');
  blackColor.classList.add('selected');
};
// fazer linhas
function makeLines(numberOfLines) {
  let putLine = document.getElementById('pixel-board');
  let blocosPorLinha = 5;
  for (let contadorLinhas = 1; contadorLinhas <= numberOfLines; contadorLinhas += 1) {
    let line = document.createElement('div');
    putLine.appendChild(line);
    for (let i = 1; i <= blocosPorLinha ; i += 1) {
      line.appendChild(createBlock('pixel'));
    }
  }
}
// fazer o blocos
function createBlock(className) {
  let box = document.createElement('div');
  box.className = className;
  return box;
};

function selecionaCor(evento) {
  let cores = document.querySelectorAll('.selected');
  if (cores.length === 0) {
    evento.target.classList.add('selected');
  } else {
    cores[0].classList.remove('selected');
    evento.target.classList.add('selected');
  } 
}
let paletaCores = document.getElementById('color-palette');
paletaCores.addEventListener('click', selecionaCor);

function pintarPixels(evento) {
  let colorSelected = document.getElementsByClassName('selected');
  if (colorSelected[0].classList.contains('color1')) {
    evento.target.classList.add('color1');
  } else if (colorSelected[0].classList.contains('color2')) {
    evento.target.classList.add('color2');
  } else if (colorSelected[0].classList.contains('color3')) {
    evento.target.classList.add('color3');
  } else if (colorSelected[0].classList.contains('color4')) {
    evento.target.classList.add('color4');
  }
}
let pixelCanvas = document.getElementById('pixel-board');
pixelCanvas.addEventListener('click', pintarPixels);

// limpar tela
function limparCanvaPreto() { 
  for (let i = 0; i < todosPixels.length; i += 1) {
    if (todosPixels[i].classList.contains('color1')) {
      todosPixels[i].classList.remove('color1');
    }else if (todosPixels[i].classList.contains('color2')) {
      todosPixels[i].classList.remove('color2');
    }else if (todosPixels[i].classList.contains('color3')) {
      todosPixels[i].classList.remove('color3');
    }else if (todosPixels[i].classList.contains('color4')) {
      todosPixels[i].classList.remove('color4');
    }
  }
}


let botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limparCanvaPreto);
