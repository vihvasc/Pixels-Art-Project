function criarPaletas() {
  let div = document.getElementById("color-palette");
  let ul = document.createElement("ul");
  div.appendChild(ul);
  
  let cores = ['black','red', 'blue', 'green'];

  for (let i = 0; i < cores.length; i += 1) {
    let li = document.createElement("li");
    li.className = "color";
    li.style.backgroundColor = cores[i];
    ul.appendChild(li)
  }
}
criarPaletas();
