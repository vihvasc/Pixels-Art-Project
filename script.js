const pixels = document.getElementsByClassName('pixel');
let c1 = document.getElementById('cor1');
c1.style.backgroundColor = 'black'
let c2 = document.getElementById('cor2');
c2.style.backgroundColor = 'blue'
let c3 = document.getElementById('cor3');
c3.style.backgroundColor = 'green'
let c4 = document.getElementById('cor4');
c4.style.backgroundColor = 'yellow'
let cores = document.getElementsByClassName('color');
document.getElementById('cor1').classList.add('selected');


function selectedColor(cor) {
    for (let i = 0; i < 4; i += 1) {
    cores[i].classList.remove('selected')
    }
  let c = cor.target;
  c.classList.add('selected');
   
}

function pintarPixel2 () {
    const selected2 = document.querySelector('.selected')
    const corr = selected2.style.backgroundColor
    event.target.style.backgroundColor = corr
}

function pintarPixel () {

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', pintarPixel2);
  }
    

}

pintarPixel ()



for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selectedColor)
}

