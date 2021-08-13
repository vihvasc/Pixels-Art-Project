// Requisito 1

let h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

// Requisito 2

function createDivPai() {
        let div = document.createElement('div');
        div.id = 'color-palette';
        document.body.appendChild(div);
}

createDivPai();

function createDivFilhas() {
    let arrayColors = ['black', 'blue', 'pink', 'yellow'];
    for (let index = 0; index < 4; index += 1) {
        let div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = arrayColors[index];
        div.style.border = '1px solid black';
        let divCores = document.querySelector('#color-palette');
        divCores.appendChild(div);
    }
}

createDivFilhas();

// Exercício 3



