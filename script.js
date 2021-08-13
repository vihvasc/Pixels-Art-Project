const palleteColors = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']
const colorsUl = document.querySelector('.colors-ul')
const pixelBoard = document.getElementById('pixel-board')
const clearButton = document.getElementById('clear-board')
const generateBoardButton = document.getElementById('generate-board')
let backgroundColorSelected = 'rgb(0,0,0)'

function addClassAndBackgroundToColors(colors){

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
function creatPixelsBoard(width, heigth){
  const boardElements = document.querySelectorAll('.pixel')
  pixelBoard.style.maxWidth = `${width*40 + 2}px`

  if(boardElements.length !== 0){
    boardClear(boardElements)
  }
    for(let line = 1; line <= heigth; line += 1){
      let lineOfPixels = document.createElement('div')
      lineOfPixels.classList.add('pixel-line')
      lineOfPixels.style.maxWidth = `${width*40}px`
      pixelBoard.appendChild(lineOfPixels)
      for(let column = 1; column <= width; column += 1){
        let block = document.createElement('div')
        block.classList.add('pixel')
        block.style.backgroundColor = 'rgb(255,255,255)'
        lineOfPixels.appendChild(block)
      }
    }
}
function boardClear(pixels) {
  for(let i = 0; i < pixels.length; i += 1){
    pixels[i].remove()
  }
}

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
  console.log('clicou')
})

clearButton.addEventListener('click', function() {
  let pixelsList = document.getElementsByClassName('pixel')
  for(pixel of pixelsList){
    pixel.style.backgroundColor = 'rgb(255,255,255)'
  }
})

generateBoardButton.addEventListener('click', function() {
  const boardElements = document.querySelectorAll('.pixel')
  let inputText = document.getElementById('board-size').value
  let inputNumber = parseInt(inputText)
  if(inputText === ''){
    window.alert('Board inválido!')
  }
  else if (inputNumber < 5){
    window.alert('Valor baixo demais, considerando como 5.')
    creatPixelsBoard(5, 5)
  }
  else if(inputNumber > 50){
    window.alert('Valor alto demais, considerando como 50.')
    creatPixelsBoard(50, 50)
  }else{
    creatPixelsBoard(inputNumber, inputNumber)
  }
  
})

addClassAndBackgroundToColors(palleteColors)
creatPixelsBoard(5, 5)
