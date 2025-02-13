const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direction = "top"; // Start by moving up

const moveCounterClockwise = setInterval(function () {
    if (direction == "top") {
        y--;
        if (y == 0) {
            direction = "right";
        }
    } else if (direction == "right") {
        left++;
        if (left == 300) {
            direction = "bottom";
        }
    } else if (direction == "bottom") {
        y++;
        if (y == 300) {
            direction = "left";
        }
    } else { // direction == "left"
        left--;
        if (left == 0) {
            clearInterval(moveCounterClockwise);
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);
