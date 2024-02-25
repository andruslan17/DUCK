// this the class of ball object
class Ball {
    // constructor for setting the ball object
    constructor(game) {
        this.img = document.getElementById("ballImg");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.reset();
        this.size = 16;
    }

    // reset the position and the speed
    reset() {
        this.position = { x: 10, y: 400 };
        this.speed = { x: parseInt(localStorage.getItem("speed")), y: -parseInt(localStorage.getItem("speed")) };
    }

    // draw the game
    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size, this.size);
    }


    // update the movement of the ball and its speed
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // when the ball hits the the top of gamepaly
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
        // when the ball hits the the bottom of gamepaly without hitting the paddle (lose one live)
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }
        // when the ball hits the the right or the left of gamepaly
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // when the ball hits the paddle 
        if (detectCollision(this, this.game.paddle) === 1) {
            // the ball goes up
            this.speed.y = -this.speed.y;
            // update the vertical position of ball (means the ball goes up by one step)
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }


}