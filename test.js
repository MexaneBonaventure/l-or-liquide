const text = document.getElementById("testAnim");

setInterval(() => {
    if (text.style.visibility === "hidden") {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
    }
}, 300
);


let position = 0;
let direction = 1;

function moveText() {
    text.style.position = "relative";
    text.style.left = position + "px";

    position += direction;

    if (position > 250 || position < 0) {
        direction *= -1;
    }

    requestAnimationFrame(moveText);
}

moveText();




const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let colorIndex = 0;

setInterval(() => {
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 500); 
