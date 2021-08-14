window.onload = function() {
  const palette = document.getElementsByClassName('color');
  let corAtual = '#000000';

  palette[0].style.backgroundColor = '#000000';
  palette[1].style.backgroundColor = '#16db93';
  palette[2].style.backgroundColor = '#048ba8';
  palette[3].style.backgroundColor = '#a4036f';

  palette[0].addEventListener('click', function() {
    palette[0].className = 'color selected';
    palette[1].className = 'color';
    palette[2].className = 'color';
    palette[3].className = 'color';
    corAtual = '#000000';
  });

  palette[1].addEventListener('click', function() {
    palette[1].className += ' selected';
    palette[0].className = 'color';
    palette[2].className = 'color';
    palette[3].className = 'color';
    corAtual = '#16db93';
  });

  palette[2].addEventListener('click', function() {
    palette[2].className += ' selected';
    palette[0].className = 'color';
    palette[1].className = 'color';
    palette[3].className = 'color';
    corAtual = '#048ba8';
  });

  palette[3].addEventListener('click', function() {
    palette[3].className += ' selected';
    palette[0].className = 'color';
    palette[1].className = 'color';
    palette[2].className = 'color';
    corAtual = '#a4036f';
  });

  const linha1 = document.querySelectorAll('#linha1 .pixel');
  const linha2 = document.querySelectorAll('#linha2 .pixel');
  const linha3 = document.querySelectorAll('#linha3 .pixel');
  const linha4 = document.querySelectorAll('#linha4 .pixel');
  const linha5 = document.querySelectorAll('#linha5 .pixel');

  linha1[0].addEventListener('click', function() { linha1[0].style.backgroundColor = corAtual; });
  linha1[1].addEventListener('click', function() { linha1[1].style.backgroundColor = corAtual; });
  linha1[2].addEventListener('click', function() { linha1[2].style.backgroundColor = corAtual; });
  linha1[3].addEventListener('click', function() { linha1[3].style.backgroundColor = corAtual; });
  linha1[4].addEventListener('click', function() { linha1[4].style.backgroundColor = corAtual; });

  for (let item = 0; item < linha1.length; item += 1) {
    linha1[item].addEventListener('click', function() { linha1[item].style.backgroundColor = corAtual; });
  }

  for (let item = 0; item < linha2.length; item += 1) {
    linha2[item].addEventListener('click', function() { linha2[item].style.backgroundColor = corAtual; });
  }

  for (let item = 0; item < linha3.length; item += 1) {
    linha3[item].addEventListener('click', function() { linha3[item].style.backgroundColor = corAtual; });
  }

  for (let item = 0; item < linha4.length; item += 1) {
    linha4[item].addEventListener('click', function() { linha4[item].style.backgroundColor = corAtual; });
  }

  for (let item = 0; item < linha5.length; item += 1) {
    linha5[item].addEventListener('click', function() { linha5[item].style.backgroundColor = corAtual; });
  }

  const botao = document.getElementById('clear-board');

  botao.addEventListener('click', function() {
    for (let item = 0; item < linha1.length; item += 1) {
      linha1[item].style.backgroundColor = '#ffffff';
    }

    for (let item = 0; item < linha2.length; item += 1) {
      linha2[item].style.backgroundColor = '#ffffff';
    }

    for (let item = 0; item < linha3.length; item += 1) {
      linha3[item].style.backgroundColor = '#ffffff';
    }

    for (let item = 0; item < linha4.length; item += 1) {
      linha4[item].style.backgroundColor = '#ffffff';
    }

    for (let item = 0; item < linha5.length; item += 1) {
      linha5[item].style.backgroundColor = '#ffffff';
    }
  });
};
