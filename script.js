const pixelBoard = document.getElementById('pixel-board');
let maxLines = 5;
let maxColumns = 5;

window.onload = function() {
    for (let index = 0; index < maxLines; index += 1) {
        for (let i =0; i < maxLines; i +=1) {
            let pixel = document.createElement('div');
            pixelBoard.appendChild(pixel).className = "pixel";
        }
    }
};

