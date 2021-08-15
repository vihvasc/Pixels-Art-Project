window.onload = function() {
  let board = document.getElementById('pixel-board')
  
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
}