const darkColor = document.querySelector('.dark');
const darkBlueColor = document.querySelector('.dark-blue');
const lightBlueColor = document.querySelector('.light-blue');
const lightGreenColor = document.querySelector('.light-green');

// 7. Created function for changed selected
function changeSelected(event) {
  const pixelColor = document.querySelector('.selected');
  pixelColor.classList.remove('selected');
  event.target.classList.add('selected');
}
darkColor.addEventListener('click', changeSelected);
darkBlueColor.addEventListener('click', changeSelected);
lightBlueColor.addEventListener('click', changeSelected);
lightGreenColor.addEventListener('click', changeSelected);

// 8.
