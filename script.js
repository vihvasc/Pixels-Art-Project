function startPage() {
  let parent = document.getElementById('color-palette');
  let selectedColor = parent.firstElementChild;
  selectedColor.classList.add('selected');
}

startPage();

function selectPalette() {
  let parent = document.getElementById('color-palette');
  
  parent.addEventListener('click', function(event) {
    if (event.target.className === 'color') {
      let selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    }    
  });
}

selectPalette();
