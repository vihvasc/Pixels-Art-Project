clearButton.addEventListener('click', function() {
    let pixelsList = document.getElementsByClassName('pixel')
    for(pixel of pixelsList){
    pixel.style.backgroundColor = 'white'
    }
    })