const pixelBoard = document.getElementById('pixel-board');
const corEscolhida = document.getElementsByClassName("color selected");
for (let i = 0; i < 25; i += 1) {
    const grid = document.createElement('div');
    grid.className = 'pixel';
    pixelBoard.appendChild(grid);
    grid.addEventListener('click', pikedColor)
    
}


    
document.getElementById('blue').addEventListener('click', clickColor);
document.getElementById('black').addEventListener('click', clickColor);
document.getElementById('red').addEventListener('click', clickColor);
document.getElementById('purple').addEventListener('click', clickColor);

function clickColor (clickEvent) {
    const selection = document.querySelector('.selected');
    selection.classList.remove('selected');
    clickEvent.target.classList.add('selected');
    console.log("clicado")
}

function pikedColor (evento){
    let corEscolhida = document.querySelector(".selected").style.backgroundColor;
    const pixcor = document.querySelector("pixel")
    console.log("clicado pixel ")
    console.log(corEscolhida)
    evento.target.style.backgroundColor = corEscolhida;
}

