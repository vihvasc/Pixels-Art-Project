function colorSelect() {
  const colors = document.getElementsByClassName('color');
  const corAnterior = document.getElementsByClassName('selected');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      corAnterior[0].classList.remove('selected');
      event.target.classList.add('color', 'selected');
    });
  }
}
colorSelect();
