
// desafio 1
// function titulo1() {
//   let tituloH1 = document.createElement('h1');
//   tituloH1.id = 'title';
//   tituloH1.innerText = 'Paleta de Cores';
//   document.body.appendChild(tituloH1);
// }
// titulo1()

// desafio 2
let paletteDiv = document.querySelector('#color-palette')

function paletteList() {

  for (let index = 0; index < 4; index += 1) {
    let paletteSon = document.createElement('div');
    let colors = ['#000', '#4169E1', '#c8a2c8', '#bde0ff',];

    paletteSon.className = 'color';
    paletteSon.style.backgroundColor = colors[index];
    paletteDiv.appendChild(paletteSon);
  }

}
paletteList()