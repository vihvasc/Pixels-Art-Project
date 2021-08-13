
// Requisito 01
function createTitle () {
  let h1 = document.createElement( 'h1' );
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.querySelector( 'body' ).appendChild( h1 );
}
createTitle();

// Requsito 02 e 03
function createPalette () {
  let createList = document.createElement( 'div' );
  createList.id = 'color-palette';
  document.querySelector( 'body' ).appendChild( createList );
}

let bgColors = ['#000000', '#ffb3ff', '#b3ffcc', '#ccb3ff'];

function addColor () {
  for (let index = 0; index < bgColors.length; index += 1) {
    let colorPallete = document.createElement( 'div' );
    colorPallete.className = 'color';
    colorPallete.style.border = '1px solid black';
    colorPallete.style.display = 'inline-block';
    colorPallete.style.margin = '10px';
    colorPallete.style.width = '40px';
    colorPallete.style.height = '40px';
    colorPallete.style.backgroundColor = bgColors[index];
    document.querySelector( '#color-palette' ).appendChild( colorPallete );
  }
}
createPalette();
addColor();



