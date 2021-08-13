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

function board () {
  let pixel = 5;
  let wide = pixel;
  let height = pixel
  let lines = document.getElementsByClassName('line');

  for (let i = 0; i < lines.length; i +=1){
    for (let index = 0; index < wide; index += 1){
      let square = document.createElement('div');
      lines[i].appendChild(square);
      square.className = 'pixel';
    };
  };
}

board ();

function selected () {
  let selectColorBlack=document.querySelector('.color');
  selectColorBlack.classList.add('selected')
}

selected();