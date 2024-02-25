// this class for paddle object
class Paddle {
    // the constructor to initialize the paddle object
    constructor(game) {
        this.img = document.getElementById("paddle");
        this.width = 150;
        this.height = 20;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.maxSpeed = 10;
        this.speed = 0;
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10,
        }
    }
    // function for moving left
    moveLeft() {
        this.speed = -this.maxSpeed
    }
    // function for moving right
    moveRight() {
        this.speed = this.maxSpeed
    }

    // function for moving position
    moveWithPosition(x) {
        this.position.x = x;
    }
    // function to stop the paddle
    stop() {
        this.speed = 0;
    }

    // function of drawing the paddle
    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    // function of update the paddle's position
    update(deltaTime) {
        this.position.x += this.speed;
        // update the paddle position when exceed the left boundry of the game
        if (this.position.x < 0) this.position.x = 0;
        // update the paddle position when exceed the left boundry of the game
        if (this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
    }


}