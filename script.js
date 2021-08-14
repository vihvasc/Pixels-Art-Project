
// desafio 1
// function titulo1() {
//   let tituloH1 = document.createElement('h1');
//   tituloH1.id = 'title';
//   tituloH1.innerText = 'Paleta de Cores';
//   document.body.appendChild(tituloH1);
// }
// titulo1()

// desafio 2, 3

let paletteDiv = document.querySelector('#color-palette')

function paletteList() {

  for (let index = 0; index < 4; index += 1) {
    let paletteSon = document.createElement('div');
    let colors = ['#000', '#e8f7d9', '#fcdec9', '#d3d5e4'];
    paletteSon.className = 'color';
    paletteSon.style.backgroundColor = colors[index];
    paletteSon.style.border = '1px solid #000';
    paletteDiv.appendChild(paletteSon);
  }

}
paletteList()


// desafio 4 e 5- id pixel-board - class pixel

let pixelsColor = document.querySelector('#color-palette')

function createPixels() {
  let pixelDiv = document.createElement('div');
  pixelDiv.id = 'pixel-board';
  document.body.appendChild(pixelDiv);

  for (let index = 0; index < 25; index += 1) {
    let pixelLi = document.createElement('li');
    pixelLi.classList.add('pixel');
    pixelLi.style.background = 'white';
    pixelDiv.appendChild(pixelLi)
  }
}
createPixels();

// desafio 6 

let firstChild = document.querySelector('.color');
firstChild.classList.add('selected');






