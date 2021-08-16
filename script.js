const colorsPalette = ['black', 'red', 'blue', 'green']
const colorsUl = document.querySelector('.colors-ul')
const pixelBoard = document.getElementById('pixel-board')
const clearButton = document.getElementById('clear-board')
let backgroundColorSelected = 'black'

clearButton.addEventListener('click', function() {
    let pixelsList = document.getElementsByClassName('pixel')
    for(pixel of pixelsList){
    pixel.style.backgroundColor = 'white'
    }
    })