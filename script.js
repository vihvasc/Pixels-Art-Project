function startPage() {
  let parent = document.getElementById('color-palette');
  let selectedColor = parent.firstElementChild;
  selectedColor.classList.add('selected');
}

startPage();
