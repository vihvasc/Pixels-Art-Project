let colorSelect = document.querySelectorAll('.color');
let paletteColors = document.querySelector('#color-palette');
function selecionaPixel(event) {
    for (let index = 0; index < colorSelect.length; index += 1) {
            colorSelect[index].classList.remove('selected');
      }
    event.target.classList.add('selected'); 
}
paletteColors.addEventListener('click', selecionaPixel);


//digesan 9 gotas 
//enterogermina plus uma vez por dia