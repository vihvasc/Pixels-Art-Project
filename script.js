let quadroPixel = document.querySelector('#pixel-board');

let linha = 5;

function makeLine() {
  for (let i = 0; i < linha; i += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    quadroPixel.appendChild(line);
    makePixels(line);
  }
}

makeLine();

function makePixels(ondeGuarda) {
  for (let i = 0; i < linha; i += 1) {
    let pixel = document.createElement('div');
    // let line = document.querySelector(".line")
    pixel.className = 'pixel';

    ondeGuarda.appendChild(pixel);
  }
}

