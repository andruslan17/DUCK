// this function to detect the ball and return value of this detection
function detectCollision(ball, gameObject) {
    // get the positions of the ball
    var bottomOfBall = ball.position.y + ball.size;
    var topOfBall = ball.position.y;
    var leftOfBall = ball.position.x;
    var rightOfBall = ball.position.x + ball.size;

    // get the positions of the paddle
    var topOfgameObject = gameObject.position.y;
    var bottomOfgameObject = gameObject.position.y + gameObject.height;
    var leftSideofgameObject = gameObject.position.x;
    var rightSideOfgameObject = gameObject.position.x + gameObject.width;


    // the ball hit the object (paddle or brick) from top
    if (bottomOfBall >= topOfgameObject &&
        topOfBall <= bottomOfgameObject &&
        leftOfBall >= leftSideofgameObject &&
        rightOfBall <= rightSideOfgameObject
        ){
        return 1;
    } 
    // the ball hit the object (brick) from bottom
    else if (leftOfBall <= rightSideOfgameObject &&
            rightOfBall >= leftSideofgameObject &&
            topOfBall >= topOfgameObject - 3 &&
            bottomOfBall <= bottomOfgameObject + 3
    ) {
        return 2;
    }
    return 0;
}