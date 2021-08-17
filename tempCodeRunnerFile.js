var width = 7,
    height = 7, // for example
    boxElem = document.getElementById("box"); // this is the element which will hold your box

for(var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
        if(i === 0 || i === height - 1 || j === 0 || j === width - 1 || (i === Math.floor(height / 2) && j === Math.floor(width / 2))) {
            // check if it's the first or last row or column, or if it's the centre of the box
            boxElem.innerHTML += "*";
        } else {
            boxElem.innerHTML += " "; // otherwise, don't add an asterisk but an empty space
        }
    }
    boxElem.innerHTML += "\n"; // new line
}