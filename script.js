function changeSelected(trigger){
    let element = trigger.target

    let selection = document.querySelector(".selected")

    if (document.getElementsByClassName("selected").length >= 1) {
        selection.classList.remove("selected")
    }
    element.classList.add("selected");
}

function changePixels (trigger){
    let element = trigger.target
    let selected = document.querySelector(".selected")
    let style = window.getComputedStyle(selected)
    let color = style.getPropertyValue("background-color")
    element.style.setProperty("background-color", color)
}

        let colorPalette = document.querySelector("#color-palette")
        colorPalette.addEventListener("click", changeSelected)

        let pixel = document.getElementsByClassName("pixel")
        for(let counter = 0; counter < pixel.length; counter += 1) {
            let add = pixel[counter]
            add.addEventListener("click", changePixels)
        }