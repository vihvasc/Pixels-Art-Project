window.onload = function() {
  const palette = document.getElementsByClassName('color');

  palette[0].style.backgroundColor = '#000000';
  palette[1].style.backgroundColor = '#16db93';
  palette[2].style.backgroundColor = '#048ba8';
  palette[3].style.backgroundColor = '#a4036f';

  palette[0].addEventListener('click', function() {
    palette[0].className = 'color selected';
    palette[1].className = 'color'
    palette[2].className = 'color'
    palette[3].className = 'color'
  });

  palette[1].addEventListener('click', function() {
    palette[1].className += ' selected';
    palette[0].className = 'color';
    palette[2].className = 'color';
    palette[3].className = 'color';
  });

  palette[2].addEventListener('click', function() {
    palette[2].className += ' selected';
    palette[0].className = 'color';
    palette[1].className = 'color';
    palette[3].className = 'color';
  });

  palette[3].addEventListener('click', function() {
    palette[3].className += ' selected';
    palette[0].className = 'color';
    palette[1].className = 'color';
    palette[2].className = 'color';
  });
};
