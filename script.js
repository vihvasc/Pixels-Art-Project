const pixelBoard = document.getElementById('pixel-board');
let maxLines = 5;
let maxColumns = 5;

window.onload = function() {
    document.getElementById('color1').classList.add('selected');
    for (let index = 0; index < maxLines; index += 1) {
        for (let i =0; i < maxLines; i +=1) {
            let pixel = document.createElement('div');
            pixelBoard.appendChild(pixel).className = "pixel";
        }
    }
};

let buttons = document.getElementsByTagName('button');

for (index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', colorSelection);
}

console.log(buttons.length)



function colorSelection() {
    const selectedColor = document.querySelector('.selected');
    const newColor = event.target

    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
}