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

let butao = document.createElement('div')
butao.id = 'clear-board'
butao.innerHTML = 'Limpar'
butao.style.backgroundColor = 'grey'
butao.style.width = '100px'
butao.style.padding = '4px'
butao.style.display = 'inline-block'
let board = document.getElementById('pixel-board')
document.body.insertBefore(butao, board)



butao.addEventListener('click', function (){
    for(let key of li){
        key.style.backgroundColor = 'white';
    }
})
