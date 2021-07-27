function zoomIn(){
    let element = document.getElementById("overlay");
    element.style.visibility = "visible";

// horizontal
    let x = event.clientX;
// vertical
    let y = event.clientY;

    element.style.top = y - 80;
    element.style.left = x- 80;

}

function zoomOut()
{
    let element = document.getElementById("overlay");
    element.style.visibility = "hidden";
}
