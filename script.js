function colorPalette () {
  let colors = ['black', 'purple', 'orange', 'aqua']
  let paletteContainer = document.getElementById('color-palette');

  for ( let i = 0; i < 4; i += 1) {
    let paletteColor = colors[i]
    let paletteColorItem = document.createElement('li');
    paletteColorItem.style.backgroundColor = paletteColor;
    paletteColorItem.className = 'color'
    paletteColorItem.innerHTML = paletteColor;
    paletteColorItem.innerText = ''
    paletteContainer.appendChild(paletteColorItem);

  }

}

colorPalette () 