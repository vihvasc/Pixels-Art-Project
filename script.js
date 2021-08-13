window.onload = function () {
  let colorPalette = document.getElementById('color-palette');

  function createPixelsBoard() {
    let pixelsBoard = document.getElementById('pixels-board');

    for (let i = 1; i <= 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixelsBoard.appendChild(pixels);
    }
  }

  createPixelsBoard();

  function createPixelsBoard2() {
    let pixelsBoard2 = document.getElementById('pixels-board2');

    for (let i = 1; i <= 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixelsBoard2.appendChild(pixels);
    }
  }

  createPixelsBoard2();

  function createPixelsBoard3() {
    let pixelsBoard3 = document.getElementById('pixels-board3');

    for (let i = 1; i <= 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixelsBoard3.appendChild(pixels);
    }
  }

  createPixelsBoard3();

  function createPixelsBoard4() {
    let pixelsBoard4 = document.getElementById('pixels-board4');

    for (let i = 1; i <= 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixelsBoard4.appendChild(pixels);
    }
  }

  createPixelsBoard4();

  function createPixelsBoard5() {
    let pixelsBoard5 = document.getElementById('pixels-board5');

    for (let i = 1; i <= 5; i += 1) {
      let pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixelsBoard5.appendChild(pixels);
    }
  }

  createPixelsBoard5();
};
