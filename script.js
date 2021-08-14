function colorPalette () {
  let colors = ['black', 'purple', 'orange', 'aqua']
  let paletteContainer = document.getElementById('color-palette');

  for ( let i = 0; i < 4; i += 1) {
    var paletteColor = colors[i]
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

function select () {
  let selectColorBlack=document.getElementsByClassName('color')[0];
  selectColorBlack.classList.add('selected')
}

select();

function selectedColor () {

    let selectedColor = document.getElementById('color-palette')
    let newColor = document.getElementsByClassName('color');
      
    selectedColor.addEventListener('click', newColors);
  //  material acessado :https://github.com/tryber/sd-08-project-pixels-art/blob/fabio-ferreira-pixels-art-project/script.js
    function removeSelected() {
        for (let i = 0; i < newColor.length; i += 1) {
          newColor[i].className = 'color';
        }
      }

      function newColors (newColor) {
        removeSelected ();
        newColor.target.className = 'color selected';
      }
    }
    selectedColor () ;
  
  
    function paintBoard () {
    
      const board = document.getElementById('pixel-board');
  
      board.addEventListener('click', setColor);

      function setColor(event) {
      event.target.style.backgroundColor = document.querySelector('.color.selected').style.backgroundColor;    
        }
        }

      paintBoard ();

      function clearButton (){
        let getButton = document.querySelector('#clear-board');
        let getPixels = document.querySelectorAll('.pixel')
        let colorPixel = 'white';
        getButton.addEventListener('click', function() {
          for (let i = 0; i <getPixels.length; i +=1) {
            if ( getPixels[i].style.backgroundColor !== colorPixel ) {
              getPixels[i].style.backgroundColor = colorPixel
            }
          }
        })

      }
      clearButton()