// this class for the brick of the game
class Brick {
    // this constructor to set the values of the brick
    constructor(game, position) {
        this.img = document.getElementById("brick");
        this.game = game;
        this.position = position;
        this.width = 70;
        this.height = 35;
        this.deleted = false;
    }

    // this method to upadte the ball and game depend on the hit of the ball
    update() {
        // check when the ball hit the top of the brick (from top)
        if (detectCollision(this.game.ball, this) === 1) {
            // update the speed of the ball
            this.game.ball.speed.y = -this.game.ball.speed.y;
            // delete the brick element
            this.deleted = true;
            // update the game score
            this.game.score += 10;
            // play sound of ball when hit the brick 
            if (this.game.soundEffectOn)
                this.play();
        } 
        // check when the ball hit the bottom of the brick (from bottom)
        else if (detectCollision(this.game.ball, this) === 2) {
            // update the speed of the ball
            this.game.ball.speed.x = -this.game.ball.speed.x;
            // delete the brick element
            this.deleted = true;
            // update the game score
            this.game.score += 10;
            // play sound of ball when hit the brick
            if (this.game.soundEffectOn)
                this.play();
        }
    }


    // this method to re-draw the game
    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    // this method to play the music
    play() {
        var audio = document.getElementById("audio");
        audio.play();
    }
}