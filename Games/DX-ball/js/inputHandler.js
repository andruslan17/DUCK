// this class to handle the events of the movement 
class InputHandler {
    // the constructor takes the game & the paddle
    // and check of the movement and take its action
    constructor(game, paddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                // left arrow clicked
                case 37:
                    paddle.moveLeft();
                    break;
                // right arrow clicked
                case 39:
                    paddle.moveRight();
                    break;
                // escape button clicked
                case 27:
                    game.togglePause();
                    break;
                // "r" button clicked to restart the game
                case 82:
                    game.gameState = GAME_STATE.NEWLEVELL;
                    game.lives = 3;
                    game.score = 0;
                    window.localStorage.setItem("level", 1)
                    game.start();
                    break;
                // space bar clicked
                case 32:
                    game.lives = 3
                    window.localStorage.setItem("level", 1)
                    game.start();
                    break;
            }
        })

        // the event to stop the paddle after leave the button
        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                // left arrow released
                case 37:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                // right arrow released
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        })
        // the event to move the paddle with the movement of the mouse
        document.addEventListener('mousemove', (event) => {
            paddle.moveWithPosition(event.clientX);
        })
    }
}