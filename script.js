let position1 = document.querySelectorAll('.color')[0].style.backgroundColor = 'rgb(0, 0, 0)';
let position2 = document.querySelectorAll('.color')[1].style.backgroundColor = 'rgb(255, 0, 119)';
let position3 = document.querySelectorAll('.color')[2].style.backgroundColor = 'rgb(255, 173, 173)';
let position4 = document.querySelectorAll('.color')[3].style.backgroundColor = 'rgb(255, 214, 165)';

window.onload = createPixels();

function createPixels(number = 5) {
    for (let evenCreateLine = 0; evenCreateLine < number; evenCreateLine += 1) {
        let eachLines = document.createElement('div');
        for (let evenCompleteSquare = 0; evenCompleteSquare < number; evenCompleteSquare += 1) {
            let pixelFrame = document.createElement('div');
            pixelFrame.className = 'pixel';
            pixelFrame.classList.add('pixel');
            eachLines.appendChild(pixelFrame);
        }
        document.getElementById('pixel-board').appendChild(eachLines);
    }
}

let colorPalette = document.querySelector("#color-palette");
colorPalette.addEventListener("click", function(event) {
    let selectColor = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
        selectColor.classList.remove('selected');
        event.target.classList.add('selected');
    }
});

let pixelSquare = document.getElementById('pixel-board')
pixelSquare.addEventListener('click', function(event) {
    if (event.target.className === 'pixel') {
        let corAtual = document.querySelector('.selected').style.backgroundColor;
        let corSelecionada = event.target;
        corSelecionada.style.backgroundColor = corAtual;
    }
});

let clearPallete = document.querySelector('#clear-board');
clearPallete.addEventListener('click', function() {
    let pixelFrame = document.querySelectorAll('.pixel');
    for (let paint = 0; paint < pixelFrame.length; paint += 1) {
        pixelFrame[paint].style.backgroundColor = 'white';
    }
});

function optionUser() {
    let input = document.getElementById('board-size');
    let choiceButton = document.getElementById('generate-board');
    choiceButton.addEventListener('click', () => {
        let pixelBox = document.getElementById('pixel-board');
        if (input.value === '') {
            alert('Board inválido!')
            input.value = 5;
        } else if (input.value <= 5) {
            input.value = 5;
        } else if (input.value >= 50) {
            input.value = 50;
        }
        pixelBox.innerHTML = '';
        createPixels(input.value);
    })
}
optionUser();

function randomPalettes() {
    const color = document.getElementsByClassName('color');
    for (let index = 1; index < color.length; index += 1) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        color[index].style.backgroundColor = rgb;
    } // fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
}
randomPalettes();