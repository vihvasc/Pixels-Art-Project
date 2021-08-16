const colorsPalette = ['black', 'red', 'blue', 'green']
const colorsUl = document.querySelector('.colors-ul')
const pixelBoard = document.getElementById('pixel-board')
const clearButton = document.getElementById('clear-board')
let backgroundColorSelected = 'black'

function alterarCor(colors){
    for(let i = 0; i < colors.length; i += 1){
    let li = document.createElement('li')
    if (i === 0) {
    li.classList.add('selected')
}
    li.classList.add('color')
    li.style.backgroundColor = colors[i]
    colorsUl.appendChild(li)
  }
}

clearButton.addEventListener('click', function() {
    let pixelsList = document.getElementsByClassName('pixel')
    for(pixel of pixelsList){
    pixel.style.backgroundColor = 'white'
    }
})

colorsUl.addEventListener('click', function(e) {
    let element = e.target
    backgroundColorSelected = element.style.backgroundColor
    let previousSelected = document.querySelector('.selected')
    previousSelected.classList.remove('selected')
    element.classList.add('selected')
})
    pixelBoard.addEventListener('click', function(e) {
    let element = e.target
    element.style.backgroundColor = backgroundColorSelected
})

alterarCor(colorsPalette)