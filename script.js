const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

firstColor.classList.add('selected');

firstColor.addEventListener("click", changeColor);
secondColor.addEventListener("click", changeColor);
thirdColor.addEventListener("click", changeColor);
fourthColor.addEventListener("click", changeColor);

function changeColor (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
}

function createTable() {
	const tableLine = document.querySelectorAll('tr');
	for (let linha = 0; linha < 5; linha += 1) {
		for (let coluna = 0; coluna < 5; coluna += 1) {
			const tableElement = document.createElement('td');
			tableElement.classList.add('pixel');
		tableLine[linha].appendChild(tableElement);
        }
    }
}
createTable();