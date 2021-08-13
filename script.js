const colorPalette = ['#0f052d', '#203671', '#36868f', '#5fc75d'];

function initColorPalette() {
  const colorDivs = document.getElementsByClassName('color');

  for (let i = 0; i < colorDivs.length; i += 1) {
    const actualColor = colorPalette[i];
    const actualColorDiv = colorDivs[i];
    actualColorDiv.style.backgroundColor = actualColor;
  }
}

window.onload = function () {
  initColorPalette();
};
