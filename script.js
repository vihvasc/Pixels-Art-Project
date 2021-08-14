const pixels = document.getElementsByClassName('pixel');
let c1 = document.getElementById('cor1');
let c2 = document.getElementById('cor2');
let c3 = document.getElementById('cor3');
let c4 = document.getElementById('cor4');
let elem = document.getElementsByClassName('color selected');
let cores = document.getElementsByClassName('color');




function selectedColor(cor) {
    for (let i = 0; i < 4; i += 1) {
    cores[i].classList.remove('selected')
    }
  let c = cor.target;
  c.classList.add('selected');
  console.log(elem);


}

function pintarPixel (pixel) {
  let pintar = pixel.target;
  
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pintarPixel);
}

for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selectedColor)
}

document.getElementById('cor1').classList.add('selected');