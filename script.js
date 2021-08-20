function createRandomColor() {
  return `#${Math.floor(Math.random() * 16997216).toString(16)}`;
  /*
   * Consultei o site dev.to para poder criar essa função.
   * link: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
   */
}

function verifyAndAddBackgroundColor() {
  const getColorClass = document.querySelectorAll('.color');
  for (let i = 1; i < getColorClass.length; i += 1) {
    if (getColorClass[i]) {
      getColorClass[i].style.backgroundColor = createRandomColor();
    }
    console.log(createRandomColor());
  }
}

function firstLiIsBlack() {
  const getColorClass = document.querySelectorAll('.color');
  verifyAndAddBackgroundColor();
  getColorClass[0].style.backgroundColor = 'black';
  getColorClass[0].classList.add('selected');
}

function createPixels() {
  const getPixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const createPixel = document.createElement('li');
    createPixel.className = 'pixel inline-block';
    if (createPixel.style.backgroundColor === 'white') {
      getPixelBoard.appendChild(createPixel);
    } else {
      createPixel.style.backgroundColor = 'white';
      getPixelBoard.appendChild(createPixel);
    }
  }
}

function removeSelect() {
  const selected = document.querySelectorAll('.selected');
  for (let i = 0; i < selected.length; i += 1){
    selected[i].classList.remove('selected');
  }
}

function selectColor() {
  const selected = document.querySelectorAll('.selected');
  const colorPalette = document.querySelector('#color-palette');

  colorPalette.addEventListener('click', (event) => {
    if (!selected) {
      event.target.classList.add('selected');
    } else {
      removeSelect();
      event.target.classList.add('selected');
      console.log(selected);
    }
  })
}

function colorPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for(let i = 0; i < pixel.length; i += 1){

    pixel[i].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      const color = selected.style.backgroundColor;
      console.log(color)
      pixel[i].style.backgroundColor = color;
      
    });
  }
}
window.onload = () => {
  verifyAndAddBackgroundColor();
  firstLiIsBlack();
  createPixels();
  selectColor();
  colorPixel();
};
