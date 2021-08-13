// Adicione à página o título "Paleta de Cores".
    // O título deverá ficar dentro de uma tag h1 com o id denominado title;
    // O texto do título deve ser exatamente "Paleta de Cores".

let novoH1 = document.createElement("h1");
novoH1.textContent = "Paleta de Cores";
novoH1.id = "title";

document.body.appendChild(novoH1);
