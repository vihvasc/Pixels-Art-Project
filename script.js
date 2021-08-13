window.onload = function (){
    createPixel(25);
    selectColor();
    document.addEventListener("click", selectColor);
    document.addEventListener('click', colorPixel);
    document.addEventListener('click', clear);

}

function createPixel(nPixel){
    
    for(let i = 0; i < nPixel; i += 1){
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        document.querySelector('#pixel-board').appendChild(divPixel);
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