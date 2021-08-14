function changeSelected(trigger){
    let element = trigger.target

    let selection = document.querySelector(".selected")

    if (document.getElementsByClassName("selected").length >= 1) {
        selection.classList.remove("selected")
    }
    element.classList.add("selected");
}

        let colorPalette = document.querySelector("#color-palette")
        colorPalette.addEventListener("click", changeSelected)