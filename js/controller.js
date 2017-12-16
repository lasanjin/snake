let previous;

document.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    if (checkDirection(key)) {
        previous = key;
        switch (key) {
            case 37: //LEFT
                snake.direction(-1, 0);
                break;
            case 39: //RIGHT
                snake.direction(1, 0);
                break;
            case 38: //UP
                snake.direction(0, -1);
                break;
            case 40: //DOWN
                snake.direction(0, 1);
                break;
            default:
                break;
        }
    }
});

function checkDirection(key) {
    switch (previous) {
        case 37: //LEFT
            return key !== 39;
        case 39: //RIGHT
            return key !== 37;
        case 38: //UP
            return key !== 40;
        case 40: //DOWN
            return key !== 38;
        default:
            return true;
    }
}