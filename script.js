window.onload = function () {
  let board = document.getElementById('pixel-board')
  let pixels = document.getElementsByClassName('color')

  for (let i = 0; i < 25; i++) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    pixel.style.display = 'inline-block'
    board.appendChild(pixel)
  }

  function firstColor() {
    let black = document.querySelector('#black')
    black.classList.toggle('selected')
  }

  firstColor()

  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', handleBoard)
  }

  function handleBoard(color) {
    for (let i = 0; i < pixels.length; i++) {
      if (pixels[i].classList.contains('selected')) {
        pixels[i].classList.toggle('selected')
      }
    }
    color.target.classList.toggle('selected')
  }
  
  
}