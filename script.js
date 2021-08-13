
const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const colorThree = document.getElementById("color-three");
const colorFour = document.getElementById("color-four");



colorOne.addEventListener('click', addSelectedClass);
colorTwo.addEventListener('click', addSelectedClass);
colorThree.addEventListener('click', addSelectedClass);
colorFour.addEventListener('click', addSelectedClass);

function addSelectedClass(event) {
    let checkSelected = document.querySelector('.selected');
    checkSelected.classList.remove('selected');
    event.target.classList.add('selected');
   }