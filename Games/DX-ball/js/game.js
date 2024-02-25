// declar the state of the game
const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVELL: 4,
    FiNISH: 5
}
// this class for the whole game 
class Game {
    // the constructor to initialize the game object
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAME_STATE.MENU;
        this.soundEffectOn = localStorage.getItem("soundEffectOn") === "true" ? true : false;
        this.musicOn = localStorage.getItem("musicOn") === "true" ? true : false;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.background = new Background(this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;
        this.score = 0;
        this.levels = [level1, level2, level3, level4, level5, level6, level7];
        this.currentLevel = parseInt(localStorage.getItem("level")) - 1;
        new InputHandler(this, this.paddle);
    }
    // start method to setup the game
    start(val = 0) {
        // if menu pushed or level is ended .. return
        if (this.gameState !== GAME_STATE.MENU && this.gameState !== GAME_STATE.NEWLEVELL) return;
        // build the game
        this.bricks = buildLevel(this, this.levels[parseInt(localStorage.getItem("level")) - 1]);
        // reset the ball 
        this.ball.reset();
        this.gameObjects = [this.background, this.ball, this.paddle, ]
        // check the state of the game (still running)
        if (val !== 1)
            this.gameState = GAME_STATE.RUNNING;
    }

    update(deltaTime) {
        // check if the player lose this level
        if (this.lives === 0) this.gameState = GAME_STATE.GAMEOVER;
        // check the pause
        if (this.gameState === GAME_STATE.PAUSED || this.gameState === GAME_STATE.MENU || this.gameState === GAME_STATE.GAMEOVER) return;
        // check if the player wins this level
        if (this.bricks.length === 0) {
            // if the player finishs all the levels of the game
            if (parseInt(localStorage.getItem("level")) === 7) {
                this.gameState = GAME_STATE.FiNISH;
                return;
            } else {
                window.localStorage.setItem("level", parseInt(localStorage.getItem("level")) + 1)
            }
            // start the next level
            this.gameState = GAME_STATE.NEWLEVELL;
            this.start();
        }
        // update the ball and bricks (combine arrays)
        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.update(deltaTime));
        // filter the deleted element of bricks array
        this.bricks = this.bricks.filter(obj => !obj.deleted);
    }

    // this function for drawing the game
    draw(ctx) {
        // draw the 
        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.draw(ctx));
        this.drawScore();
        this.drawLevels();

        // check if the game is paused and print the paused message 
        if (this.gameState === GAME_STATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgb(0, 0, 0, 0.5)";
            ctx.fill();
            ctx.font = "80px Impact";
            ctx.fillStyle = "white";
            ctx.fillText("Paused", this.gameWidth / 2 - 130, this.gameHeight / 2);
        }

        // check if the player is lost the game (lose the three lives)
        if (this.gameState === GAME_STATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgb(0, 0, 0, 1)";
            ctx.fill();
            ctx.font = "60px Impact";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // print game over to the player and asked him to play again
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
            ctx.fillText("Press 'R' to Play Again", this.gameWidth / 2, this.gameHeight / 2 + 75)
        }


        // check if the game is finished or not
        if (this.gameState === GAME_STATE.FiNISH) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgb(0, 0, 0, 1)";
            ctx.fill();
            ctx.font = "60px Impact";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // coongrate the player and update the score
            ctx.fillText("CONGRATULATION", this.gameWidth / 2, this.gameHeight / 2)
            ctx.fillText("Score: " + this.score, this.gameWidth / 2, this.gameHeight / 2 + 75)
            ctx.fillText("Press Space to Play Again", this.gameWidth / 2, this.gameHeight / 2 + 150)
        }
    }

    // this method to handle the pause button
    togglePause() {
        if (this.gameState == GAME_STATE.RUNNING)
            this.gameState = GAME_STATE.PAUSED
        else
            this.gameState = GAME_STATE.RUNNING
    }

    // this method to draw the current score
    drawScore() {
        ctx.font = "40px Impact";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + this.score, this.gameWidth - 210, 40);
    }

    // this method to draw the current lives
    drawLevels() {
        ctx.font = "40px Impact";
        ctx.fillStyle = "white";
        ctx.fillText("Lives: " + this.lives, this.gameWidth - 210, 80);
    }
}