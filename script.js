function createPixelDivs() {
  const test = document.querySelector('#pixel-board');
  let lengthDivs;

  const yHeight = 5;
  const xWidth = 5;
  for (let index = 0; index < yHeight * xWidth; index += 1) {
    lengthDivs = document.createElement('div');
    test.appendChild(lengthDivs);
    lengthDivs.classList = 'pixel';
  }
}
createPixelDivs();
