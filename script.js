window.onload = function pixelsArt() {
  function colorPalette() {
    const firstPallete = document.getElementsByClassName('color')[0];
    const secondPallete = document.getElementsByClassName('color')[1];
    const thirdPallete = document.getElementsByClassName('color')[2];
    const fourthPallete = document.getElementsByClassName('color')[3];
    firstPallete.style.backgroundColor = 'black';
    secondPallete.style.backgroundColor = '#003F63';
    thirdPallete.style.backgroundColor = '#F2B138';
    fourthPallete.style.backgroundColor = '#A1A5A6';
  }

  colorPalette();
};
