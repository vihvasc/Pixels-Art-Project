function colorPalette() {
  const paletaCores = document.querySelectorAll('.color');
  const cores = ['green', 'purple', 'darkblue', 'darkred'];
  for (let key = 0; key < paletaCores.length; key += 1) {
    paletaCores[key].classList.add(cores[key]);
  }
}
colorPalette();
