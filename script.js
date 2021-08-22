let palleteColors = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];
let colorsUl = document.querySelector('.colors-ul');
let backgroundColorSelected = 'rgb(0,0,0)';

function addClassAndBackgroundToColors(colors){
  for(let index = 0; index < colors.length; index += 1){
    let li = document.createElement("li")
    if (index === 0) {
        li.classList.add('selected')
    }
    li.classList.add("color")
    li.style.backgroundColor = colors[index]
    colorsUl.appendChild(li)
  }
}

function creatPixelsBoard(width, heigth){
    let boardElements = document.getElementsByClassName("pixel")
    let pixelBoard = document.getElementById("pixel-board")
    if(boardElements.length === 0){
      for(let line = 1; line <= heigth; line += 1){
        let lineOfPixels = document.createElement("div");
        lineOfPixels.classList.add("pixel-line");
        pixelBoard.appendChild(lineOfPixels);
        for(let column = 1; column <= width; column += 1){
          let block = document.createElement("div");
          block.classList.add("pixel");
          block.style.backgroundColor = "white";
          lineOfPixels.appendChild(block)
        }
      }
    }
  }

  colorsUl.addEventListener('click', function(e) {
    let element = e.target
    backgroundColorSelected = element.style.backgroundColor
  
    let previousSelected = document.querySelector('.selected')
    previousSelected.classList.remove('selected')
  
    element.classList.add('selected')
    console.log(element.classList)
  })
  
  addClassAndBackgroundToColors(palleteColors)
  creatPixelsBoard(5, 5)