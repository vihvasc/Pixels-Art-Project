const button1 = document.querySelector('.color')
const button2 = document.querySelector('.green')
const button3 = document.querySelector('.blue')
const button4 = document.querySelector('.red')
button1.addEventListener('click',switchColor1)
button2.addEventListener('click', switchColor2);
button3.addEventListener('click', switchColor3);
button4.addEventListener('click', switchColor4);
button1.classList.add('selected')

function makeGridEvents(){
    let index = document.querySelectorAll('.pixel').length 
    for(let count = 0; count < index; count += 1){
        let currentBlock = document.querySelectorAll('.pixel')[count]
        currentBlock.addEventListener('click', function(){
            paint(currentBlock);
        })
    }
}
function paint(currentBlock){
    let currentColor = document.querySelector('.selected')
    let setColor =  window.getComputedStyle(currentColor).backgroundColor
    currentBlock.style.backgroundColor = setColor
}

function switchColor1(){
    let actualColor = document.querySelector('.selected');
    actualColor.classList.remove('selected')
    button1.classList.add('selected')
}

function switchColor2(){
    let actualColor = document.querySelector('.selected');
    actualColor.classList.remove('selected')
    button2.classList.add('selected')
}
function switchColor3(){
    let actualColor = document.querySelector('.selected');
    actualColor.classList.remove('selected')
    button3.classList.add('selected')
}
function switchColor4(){
    let actualColor = document.querySelector('.selected');
    actualColor.classList.remove('selected')
    button4.classList.add('selected')
}

function createGrid(){
    numberOfLines = 5;
    numberOfColumns = 5;
    for(let index = 0; index < numberOfLines; index += 1){
        let line = document.querySelectorAll('.line-pixel')[index]
        for(let index2 = 0; index2 < numberOfColumns; index2 +=1 ){
            let pixelBox = document.createElement('div')
            pixelBox.className = 'pixel'
            line.appendChild(pixelBox) 
        }
    }
}
createGrid();
makeGridEvents();
