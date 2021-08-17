const selectColor = document.getElementsByClassName('color');

// criar o evento de click//
function colorPaint(event) {
  const click = event.target;
  for (let i = 0; i < selectColor.length; i += 1) {
    selectColor[i].classList.remove('selected');
  }
  click.classList.add('selected');
}
for (let i = 0; i < selectColor.length; i += 1) {
  selectColor[i].addEventListener('click', colorPaint);
}
