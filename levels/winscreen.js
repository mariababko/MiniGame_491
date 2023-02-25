class WinScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.newgameBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 95, (PARAMS.CANVAS_HEIGHT / 2) - 45, 190, 70);
    };

    update() {
        // update if user clicked
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // restart game
            if (this.mouseBB.collide(this.newgameBB)) {
                this.game.camera.loadLevel(titleScreen);
            }
            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {

        this.setWhiteStroke(ctx);
        ctx.lineWidth = 6;
        ctx.textAlign = "center";

        //title
        ctx.font = "Bold 60px Lucida Console";
        ctx.fillText("You Win!", PARAMS.CANVAS_WIDTH / 2, 100);

        ctx.font = "Bold 35px Lucida Console";

        this.setWhiteStroke(ctx);

        //restart
        if (this.mouseBB.collide(this.newgameBB)) {
            this.setGreenStroke(ctx);
        }
        ctx.fillText("NEW GAME", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        ctx.strokeRect(this.newgameBB.left, this.newgameBB.top, this.newgameBB.width, this.newgameBB.height);
    };

    setWhiteStroke(ctx) {
        ctx.strokeStyle = "White";
        ctx.fillStyle = "White";
    };

    setGreenStroke(ctx) {
        ctx.strokeStyle = "#38ac1c";
        ctx.fillStyle = "#38ac1c";
    };
}