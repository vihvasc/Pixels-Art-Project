window.onload = function (){
    createPixel(25);
}

function createPixel(nPixel){
    
    for(let i = 0; i < nPixel; i += 1){
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        document.querySelector('#pixel-board').appendChild(divPixel);
        console.log('teste');
    }
}