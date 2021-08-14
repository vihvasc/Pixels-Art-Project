


let boxBlackA = document.getElementsByClassName('color')[0];
boxBlackA.style.backgroundColor = 'black';

let boxBlackB = document.getElementsByClassName('color')[1];
boxBlackB.style.backgroundColor = 'Tomato';

let boxBlackC = document.getElementsByClassName('color')[2];
boxBlackC.style.backgroundColor = 'SkyBlue';

let boxBlackD = document.getElementsByClassName('color')[3];
boxBlackD.style.backgroundColor = 'MediumSpringGreen';

let pixelBoard = document.getElementById('pixel-board');

function creatBox() {
    for (let i = 0; i < 5; i += 1) {
        let divLineBox = document.createElement('div');
        for (let j = 0; j < 5; j += 1) {
            let divBox = document.createElement('div');
            divBox.className = 'pixel';
            divLineBox.appendChild(divBox);
        }
        pixelBoard.appendChild(divLineBox);
    }
}

creatBox();

function selectColor(){


}

selectColor();

