const palleteColors = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']

function addClassAndBackgroundToColors(colors){
  const colorsUl = document.querySelector('.colors-ul')

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
  const boardElements = document.getElementsByClassName('pixel')
  const pixelBoard = document.getElementById('pixel-board')

  pixelBoard.style.maxWidth = `${width*40 + 2}px`

  if(boardElements.length === 0){
    for(let line = 1; line <= heigth; line += 1){
      let lineOfPixels = document.createElement('div')
      lineOfPixels.classList.add('pixel-line')
      lineOfPixels.style.maxWidth = `${width*40}px`
      pixelBoard.appendChild(lineOfPixels)
      for(let column = 1; column <= width; column += 1){
        let block = document.createElement('div')
        block.classList.add('pixel')
        block.style.backgroundColor = 'white'
        lineOfPixels.appendChild(block)
      }
    }
  }
}
addClassAndBackgroundToColors(palleteColors)
creatPixelsBoard(5, 5)
