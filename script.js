window.onload = function() {
  const firstColor = document.getElementById('box-color1');
  const secondColor = document.getElementById('box-color2');
  const thirdColor = document.getElementById('box-color3');
  const fourthColor = document.getElementById('box-color4');

  function handleChangeTech(event) {
    const colorSelect = document.querySelector('.selected');
    colorSelect.classList.remove('selected');
    event.target.classList.add('selected');
  }

  firstColor.addEventListener('click', handleChangeTech);
  secondColor.addEventListener('click', handleChangeTech);
  thirdColor.addEventListener('click', handleChangeTech);
  fourthColor.addEventListener('click', handleChangeTech);
}
