window.onload = function() {
// Variaveis
const boardHeight = 5;
const boardWidth = 5;

// Funções
function makePixelBoard() {
  for (let index = 1; index <= boardHeight; index += 1) {
    let line = document.createElement('div');
    line.classList.add('board-line');

    document.querySelector('#pixel-board').appendChild(line)
    
    for (let index2 = 1; index2 <= boardWidth; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      
      document.querySelectorAll('.board-line')[index-1].appendChild(pixel);
    }
  }
}

makePixelBoard();

}