window.onload = function () {

  function makeBoardLines() {
    let lines = document.getElementsByClassName('pixel-line');

    for (let i = 0; i < lines.length; i += 1) {
      createPixels(lines[i]);
    }
  }

  function createPixels(line) {
    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }

  makeBoardLines();
};
