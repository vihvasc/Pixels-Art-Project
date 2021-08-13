window.onload = function (){
    createPixel(5);

    let boardColoring = document.querySelectorAll('.color');
    for (let i = 1; i < 4; i += 1){
        boardColoring[i].style.backgroundColor = generateColor();
    }

    selectColor();
    document.addEventListener("click", selectColor);
    document.addEventListener('click', colorPixel);
    document.addEventListener('click', clear);
    document.addEventListener('click', boardSize);    
}

function createPixel(lineInput){
    let nPixel = lineInput**2;
    let boardTotal = 42*lineInput;
    if(document.querySelector('.pixel')=== null){
        for(let i = 0; i < nPixel; i += 1){
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            document.querySelector('#pixel-board').appendChild(divPixel);
        } 
    } else {
        let pixelExist = document.querySelectorAll('.pixel');
        for(let i = 0; i < pixelExist.length; i +=1){
                pixelExist[i].remove();
        }

        for(let i = 0; i < nPixel; i += 1){
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            document.querySelector('#pixel-board').appendChild(divPixel);
            document.querySelector('#pixel-board').style.width = boardTotal + 'px';
            document.querySelector('#pixel-board').style.height = boardTotal + 'px';
        }

        
        
        }
}


function selectColor(event){
  let  sClass = document.getElementsByClassName('selected');
  if (sClass.length === 0){
      document.querySelector('#color-palette').firstElementChild.className += ' selected';
  } else if(event.target.className === 'color'){
      document.querySelector('.selected').className = 'color';
      event.target.className += ' selected';
  }
}

function colorPixel(event){
    let selected = document.querySelector('.selected');
    if(event.target.className === 'pixel'){
        event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    }

}

function clear(event){
    pixel = document.getElementsByClassName('pixel');

    if(event.target.id == 'clear-board'){
    for (let i = 0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = '#fff';
    }
}
}

function boardSize(event){
    if(event.target.className === 'changeSettings'){ 
        let input = document.getElementById('board-size');
        let boardValue = input.value;
        if (boardValue >= 5 && boardValue <= 50){
            createPixel(boardValue);
        } else if (boardValue > 50) {
            createPixel(50);
        }else {alert('Board inválido!')}
    }

}

function generateColor(){
let valuesArray = '0123456789ABCDEF';
let color = '#';

for (let i = 0; i < 3; i += 1){
    let randomValue = Math.floor(Math.random()*16);
    color += valuesArray[randomValue];
}
return color;

}