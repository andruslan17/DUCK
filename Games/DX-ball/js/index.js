// get the canvas from the doc
let canvas = document.getElementById("gameScreen");
// intialize the context
let ctx = canvas.getContext("2d");

// get the max width of the window
function getWidth() {
    // get the entire width of all html (including not the viewable)
    return document.documentElement.scrollWidth;
}

// get the max height of the window
function getHeight() {
    // get the entire height of all html (including not the viewable)
    return document.documentElement.scrollHeight;
}

// intialize the canvas's width
canvas.width = getWidth() -2 ;
// intialize the canvas's height
canvas.height = getHeight() -2;

// intialize the game width and height
const GAME_WIDTH = getWidth() -2 ;
const GAME_HEIGHT = getHeight() -2 ;

// create object from game
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// intialize the last time
let lastTime = 0;

// this function to start the loop of the game
// the timestamp in mile second
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// start window animation of the game
requestAnimationFrame(gameLoop);