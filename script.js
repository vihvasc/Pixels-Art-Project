const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];
const clearButton = document.getElementById('clear-board');

firstColor.classList.add('selected');
clearButton.addEventListener("click", clearTable);
firstColor.addEventListener("click", clickColor);
secondColor.addEventListener("click", clickColor);
thirdColor.addEventListener("click", clickColor);
fourthColor.addEventListener("click", clickColor);

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'purple';
thirdColor.style.backgroundColor = 'plum';
fourthColor.style.backgroundColor = 'peachpuff';

function clickColor (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
}

function changeColor(event) {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
}

function createTable() {
	const tableLine = document.querySelectorAll('tr');
	for (let linha = 0; linha < 5; linha += 1) {
		for (let coluna = 0; coluna < 5; coluna += 1) {
			const tableElement = document.createElement('td');
			tableElement.classList.add('pixel');
		    tableLine[linha].appendChild(tableElement);
            tableElement.addEventListener("click", changeColor);
        }
    }
}
createTable();

function clearTable() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.background = 'white';
    }
  }