// this class for the background
class Background {
    // setup the background
    constructor(game) {
        this.img = document.getElementById("backgroundOne");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }

    // draw the background
    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, this.gameWidth, this.gameHeight);
    }

    update(deltaTime) {}
}