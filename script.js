
  // requisito 1 
  const getTitle = document.getElementById('title');
  getTitle.innerText = 'Paleta de Cores';

  // requisito 2
  
  const colors = ['black', 'purple', 'green', 'blue'];
  for (let i = 0; i < colors.length; i += 1){
    let getDivColor = document.getElementById('color-palette')
    let addDivs = document.createElement('div');
    getDivColor.appendChild(addDivs);
    addDivs.className = 'color';
    addDivs.id = colors[i];
  }

// funcao handleRandomColor feita baseada na explicacao do link a seguir: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

  function handleRandomColor (){
    let r = Math.random() * 255 ;
    let g = Math.random() * 255 ;
    let b = Math.random() * 255 ;

    return `rgb(${r}, ${g}, ${b})`;
  }

  const divs = document.getElementsByClassName('color');
  divs[0].style.backgroundColor = 'black';
  divs[1].style.backgroundColor = handleRandomColor();
  divs[2].style.backgroundColor = handleRandomColor();
  divs[3].style.backgroundColor =  handleRandomColor();


  let getDivPixel = document.getElementById('pixel-board');
  function addPixel (number){  
      for(i = 0; i < (number**2); i += 1){
        let DivLines = document.createElement('div');
        getDivPixel.appendChild(DivLines);
        DivLines.className = 'pixel';
        divWidht = number * 42;
        divHeight = number * 42;
        getDivPixel.style.width = divWidht + 'px';
        getDivPixel.style.height = divHeight + 'px';
      } 
  }
  let quantidadeInicial = 5;
  addPixel(quantidadeInicial);

  
  function deletePixelBoard (){
    getDivPixel.innerHTML = '';
  }
  function renewPixelBoard (number){
    deletePixelBoard();
    addPixel(number);
    pixelColor();
  }
  
  // let getInput = parseInt(document.getElementById('board-size'));
  let getAddButton = document.getElementById('generate-board');
  function getInputText (){
    let getInput = parseInt(document.getElementById('board-size').value);
    if(getInput > 4 && getInput < 51){
      renewPixelBoard(getInput);
    } else if (getInput > 50){
      renewPixelBoard(50);
    } else if (getInput < 5){
      renewPixelBoard(5);
    }
    else{
      alert("Board inválido!");
    }
  }
  getAddButton.addEventListener('click', getInputText);
window.onload = function(){
  const getBlackColor = document.querySelector('.color');
  getBlackColor.classList += ' selected';

  function selectColor(event) {
    const initialColor = document.querySelectorAll('.selected');
    initialColor[0].classList.remove('selected');
    const target = event.target;
    target.classList = 'color selected';
  }
  
  const getColors = document.querySelectorAll('.color');
  for (let i = 0; i < getColors.length; i += 1) {
  getColors[i].addEventListener('click', selectColor);
  }
}
 
let getDivPalette = document.getElementsByClassName('color');
for (i = 0; i < getDivPalette.length; i += 1){
  let buttonColor = getDivPalette[i];
  if(buttonColor.classList.contains('color')){
    buttonColor.classList = 'color selected';
  if(buttonColor.classList.contains('selected')){
    buttonColor.classList.remove('selected')}
  }

} 

function pixelColor (){
  let pixel = document.getElementsByClassName('pixel');
  
  for (i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener('click', pixelChangeColor);
  }
  function pixelChangeColor (obj){
    obj.target.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('selected')[0]).getPropertyValue('background-color');
    console.log(obj.target);
  }
  
}
pixelColor();

let getButton = document.getElementById('clear-board');
getButton.innerText = 'Limpar';

function clearPixelColor (){
  let buttonClear = document.getElementById('clear-board');
    buttonClear.addEventListener('click', clearColor);
  function clearColor (obj){
    let getPixel = document.getElementsByClassName('pixel');
    for (i = 0; i < getPixel.length; i +=1){
    getPixel[i].style.backgroundColor = 'white';
  }
  
}
}
clearPixelColor();