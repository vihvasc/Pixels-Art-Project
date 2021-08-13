
const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const colorThree = document.getElementById("color-three");
const colorFour = document.getElementById("color-four");

colorOne.style.backgroundColor = "black";
colorTwo.style.backgroundColor = "red";
colorThree.style.backgroundColor = "green";
colorFour.style.backgroundColor = "yellow";

colorOne.addEventListener('click', addSelectedClass);
colorTwo.addEventListener('click', addSelectedClass);
colorThree.addEventListener('click', addSelectedClass);
colorFour.addEventListener('click', addSelectedClass);

function addSelectedClass(event) {
    let checkSelected = document.querySelector('.selected');
    checkSelected.classList.remove('selected');
    event.target.classList.add('selected');
   }

function changeColor(event) {
    const colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
}   