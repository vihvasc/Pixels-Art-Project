// Requisito 1 - Adicionada à página o título "Paleta de Cores".
const header = document.querySelector('header');
const h1Creator = document.createElement('h1');
h1Creator.innerText = 'Paleta de Cores';
h1Creator.id = 'title';
header.appendChild(h1Creator);
