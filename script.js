window.onload= function() {
    addPixel()
}

function addPixel(){
    var divPixel = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        divPixel.appendChild(pixel);
        
    }
}