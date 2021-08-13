window.onload = function() {
  let primeiro = document.getElementsByClassName("color")[0];
  let segundo = document.getElementsByClassName("color")[1];
  let terceiro = document.getElementsByClassName("color")[2];
  let quarto = document.getElementsByClassName("color")[3];
  primeiro.style.backgroundColor = '#000';
	primeiro.addEventListener("click",selecionaCor)
  segundo.style.backgroundColor = '#6D597A';
	segundo.addEventListener("click",selecionaCor)
  terceiro.style.backgroundColor = '#67697C';
	terceiro.addEventListener("click",selecionaCor)
  quarto.style.backgroundColor = '#C1C3C1';
	quarto.addEventListener("click",selecionaCor)
	
	let pixels = document.getElementsByClassName("pixel")
	for (pixel of pixels) {
		pixel.addEventListener("click", adicionaCor)
		pixel.style.backgroundColor = 'white'
	}
	sessionStorage.setItem("cor",'#000')
	primeiro.className = "color selected"
}
function adicionaCor(evento) {
	let cor = sessionStorage.getItem("cor")
	let pixel = evento.target
	pixel.style.backgroundColor = cor
}
function selecionaCor(evento) {
  let selected = document.getElementsByClassName("selected")[0]
	selected.className = "color"
	let cor = evento.target.style.backgroundColor
	evento.target.className = "color selected"
	sessionStorage.setItem("cor",cor)
}