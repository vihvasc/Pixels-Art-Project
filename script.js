let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');

black.addEventListener('click', selected)
red.addEventListener('click', selected)
blue.addEventListener('click', selected)
green.addEventListener('click', selected)

function selected(event){
    let sel = document.querySelector('.selected')
    sel.classList.remove('selected')
    
    event.target.classList.add('selected')
}

let li = document.getElementsByTagName('li');

for(let key of li){
    key.addEventListener('click', troca)
}


function troca(event){
    let colorir = document.querySelector('.selected')
    let colorir2 = window.getComputedStyle(colorir).backgroundColor;
    event.target.style.backgroundColor = colorir2
}


