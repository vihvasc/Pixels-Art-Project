window.onload = function () {
  let board = document.getElementById('pixel-board')
  let palette = document.getElementsByClassName('color')
  
  let blackPixel = document.getElementById('black')
  blackPixel.style.backgroundColor = '#000000'
  let greenPixel = document.getElementById('green')
  greenPixel.style.backgroundColor = '#4E6E5D'
  let whitePixel = document.getElementById('white')
  whitePixel.style.backgroundColor = '#C9D5B5'
  let goldPixel = document.getElementById('gold')
  goldPixel.style.backgroundColor = '#B1740F'


  for (let i = 0; i < 25; i++) {
    var pixel = document.createElement('div')
    pixel.style.display = 'inline-block'
    pixel.className = 'pixel'
    pixel.addEventListener('click', changeColor)
    board.appendChild(pixel)
  }

  function firstColor() {
    let black = document.querySelector('#black')
    black.classList.toggle('selected')
  }

  firstColor()

  for (let i = 0; i < palette.length; i++) {
    palette[i].addEventListener('click', handleBoard)
  }

  function handleBoard(color) {
    for (let i = 0; i < palette.length; i++) {
      if (palette[i].classList.contains('selected')) {
        palette[i].classList.toggle('selected')
      }
    }
    color.target.classList.toggle('selected')
  }

  function changeColor(pixel) {
    for (let i = 0; i < palette.length; i++) {
      if (palette[i].classList.contains("selected")) {
        pixel.target.style.backgroundColor = palette[i].style.backgroundColor
      }
    }
  }
}