class TitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.playBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 50, (PARAMS.CANVAS_HEIGHT / 2) - 45, 100, 70);
        this.creditsBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 85, (PARAMS.CANVAS_HEIGHT / 2) + 155, 170, 70);
        this.exitBB = new BoundingBox(PARAMS.CANVAS_WIDTH/2 - 50, 650 - 45, 100, 50);

        this.credits = false;
    };

    update() {
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(introCutscene);
            } else if (this.mouseBB.collide(this.creditsBB)) {
                this.credits = true;
            } else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {

        if (!this.credits) {
            this.setWhiteStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = "Bold 60px Lucida Console";
            ctx.fillText("Rhythm In Space", PARAMS.CANVAS_WIDTH / 2, 100);

            ctx.font = "Bold 35px Lucida Console";

            //play
            if (this.mouseBB.collide(this.playBB)) {
                this.setGreenStroke(ctx);
            }
            ctx.fillText("PLAY", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            this.setWhiteStroke(ctx);

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                this.setGreenStroke(ctx);
            }
            ctx.fillText("CREDITS", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 200);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

        } else {
            this.setWhiteStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setGreenStroke(ctx);
            }

            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 35px Lucida Console";
            ctx.fillText("EXIT", PARAMS.CANVAS_WIDTH/2, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }

        if (this.credits) {
            this.setWhiteStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = "Bold 60px Lucida Console";
            ctx.fillText("CREDITS", PARAMS.CANVAS_WIDTH / 2, 100);

            ctx.textAlign = "left";
            ctx.font = "Bold 35px Lucida Console";

            ctx.fillText("DEVELOPER:", 40, 200);
            ctx.fillText("Maria Babko", 40, 240);
        }
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