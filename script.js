function createDivs() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    document.getElementById('pixel-board').appendChild(div).classList.add('pixel');
  }
}
createDivs();