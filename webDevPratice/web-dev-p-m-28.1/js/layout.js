function Bold() {
    document.getElementById("textInput").style.fontWeight = 'bold';
}
function Italic() {
    document.getElementById("textInput").style.fontStyle = 'italic';
}
function Underlibe() {
    document.getElementById("textInput").style.textDecoration = 'underline';
}
function Left() {
    document.getElementById("textInput").style.textAlign = 'left';
}
function Right() {
    document.getElementById("textInput").style.textAlign = 'right';
}
function Center() {
    document.getElementById("textInput").style.textAlign = 'center';
}


function changeFontSize() {
   const newSize = document.getElementById('fontSizeInput').value + 'px';
   document.getElementById('textInput').style.fontSize = newSize;
}

function changeFontColor() {
    const newColor = document.getElementById('fontColorInput').value;
    document.getElementById('textInput').style.color = newColor;

}

