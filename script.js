window.onload = function () {
  let colorList = ['black', 'gray', 'blue', 'green'];
  let colorPallete = document.getElementById('color-palette');

  function createColorPallete(colorList) {
    for (let color of colorList) {
      let newColor = document.createElement('div');
      newColor.classList.add('color');
      newColor.classList.add(color);
      newColor.style.backgroundColor = color;
      colorPallete.appendChild(newColor);
    }
  }

  createColorPallete(colorList);
};
