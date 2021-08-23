const pixelBoard = document.getElementById("pixel-board");
for (let i = 0; i < 25; i += 1) {
    const grid = document.createElement("div");
    grid.className = "pixel";
    pixelBoard.appendChild(grid);
    console.log("olha eu aqui")

}

function clickColor (clickEvent) {
    const selection = document.querySelector(".selected");
    selection.classList.remove("selected");
    clickEvent.target.classList.add("selected");
}