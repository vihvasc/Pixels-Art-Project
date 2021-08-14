 const selectId = document.querySelector('#pixel-board');
 const lineBase = 5
 const colunmBase = 5



function crateSquare() {
  for(let index = 0; index < lineBase; index += 1){
    for (let main = 1; main < colunmBase; main += 1) {
      const creatColunm = document.createElement('div')
      creatColunm.classList.add('pixel')
      selectId.appendChild(creatColunm)
    };
  };
};

crateSquare ()

function getColorButton() {
  const selectColor = document.querySelectorAll('.color')
  selectColor[0].classList.add('selected');

  for(let color of selectColor){
    color.addEventListener('click', function(event) { 
        const selectColor = document.querySelector('.selected');
        selectColor.classList.remove('selected');
        event.target.classList.add('selected');
    })
  }
}
getColorButton()

function colorTransfer() {
  const selectDiv = document.querySelectorAll('.pixel')

  for (let pixel of selectDiv){
    pixel.addEventListener('click', function() {
      let changecolor = colordefol
      let colorStandard = document.querySelector('.pixel').style.backgroundColor
      if (pixel.style.backgroundColor === colorStandard) {
        pixel.style.backgroundColor = changecolor
      } else {
        pixel.style.backgroundColor = colorStandard
      }
    }) 
  }
};

colorTransfer()

