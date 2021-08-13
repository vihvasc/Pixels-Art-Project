const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'orange';
fourthColor.style.backgroundColor = 'purple';

firstColor.addEventListener('click', addSelectedClass);
secondColor.addEventListener('click', addSelectedClass);
thirdColor.addEventListener('click', addSelectedClass);
fourthColor.addEventListener('click', addSelectedClass);

function addSelectedClass(event) {
  const checkSelected = document.querySelector('.selected');
  checkSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
