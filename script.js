const paletaDeCores = document.createElement('div');
paletaDeCores.id = 'color-palette';
document.body.appendChild(paletaDeCores);

const cores = ['pink', 'yellow', 'brown', 'green'];

for (let index = 0; index < cores.length; index += 1) {
  const novaCor = document.createElement('div');
  novaCor.className = 'color';
  paletaDeCores.appendChild(novaCor);
}

function atribuiCores(cores) {
  for (let index = 0; index < cores.length; index += 1) {
    const quadrado = document.getElementsByClassName('color');
    quadrado[index] = cores[index];
  }
}
