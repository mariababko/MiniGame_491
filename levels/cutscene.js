class IntroCutscene {
    constructor(game) {
        this.game = game;

        this.x = 0;
        this.y = 0;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.nextBB = new BoundingBox(850,680,120,50);
        this.slideNum = 1;



        this.game.addEntity(new HealthOutline(this.game));
        this.game.addEntity(this.game.camera.healthGreenBar);

        this.game.addEntity(new HealthGreyBar(this.game));


        this.game.addEntity(new Shooting_Area(this.game));

        this.game.addEntity(new Earth(this.game));

    };

    update() {
        // if user clicks on exit button then go to level one
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.nextBB)) {
                if (this.slideNum === 4) {
                    this.game.camera.clearEntities();
                    ASSET_MANAGER.pauseBackgroundMusic();
                    this.game.camera.loadLevel(levelOne);
                } else {
                    this.slideNum++;
                }
            }
            this.game.click = null;
        }

        // update location of mouse pointer
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        // black box to cover screen
        //ctx.strokeRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.setBlackStroke(ctx);
        ctx.fillRect(0, 100, PARAMS.CANVAS_WIDTH, 300);

        // white on black background
        this.setWhiteStroke(ctx);

        // dialog and images
        this.drawCutscene(ctx, this.slideNum);

        // exit button
        if (this.mouseBB.collide(this.nextBB)) {
            this.setGreenStroke(ctx);
        }
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = "Bold 35px Courier";
        ctx.fillText("NEXT", 910, 715);
        ctx.strokeRect(this.nextBB.left, this.nextBB.top, this.nextBB.width, this.nextBB.height);
    };

    drawCutscene(ctx, slideNum) {
        ctx.font = "Bold 25px Courier";
        ctx.textAlign = "left";

        // text
        let bText = "Hello, everyone! This is our first rose ceremony together. The person who I feel the " +
            "greatest spark with will receive this rose.";
        let sText = "Roses are like so romantic! Especially red ones...reminds me of like burning passion.";
        let rText = "Eek! *repositions himself to show his best \"come hither\" expression*";

        // slides
        if (slideNum === 1) {
            ctx.fillText("Captain, we're detecting incoming asteroids!", 180, 150);
        }

        else if (slideNum === 2) {
            ctx.fillText("Captain, we're detecting incoming asteroids!", 180, 150);

            ctx.fillText("They seem to coming at us in a specific rhythm?", 180, 200);
        }

        else if (slideNum === 3) {
            ctx.fillText("Captain, we're detecting incoming asteroids!", 180, 150);

            ctx.fillText("They seem to coming at us in a specific rhythm?", 180, 200);

            ctx.fillText("You! On the guns! Get ready to shoot them down", 180, 250);
            ctx.fillText("or else Earth will be destroyed!", 180, 280);

        }

        else if (slideNum === 4) {
            ctx.fillText("Captain, we're detecting incoming asteroids!", 180, 150);

            ctx.fillText("They seem to coming at us in a specific rhythm?", 180, 200);

            ctx.fillText("You! On the guns! Get ready to shoot them down", 180, 250);
            ctx.fillText("or else Earth will be destroyed!", 180, 280);

            ctx.fillText("Use buttons 'c', 'v', 'b', and 'n' to shoot!", 180, 330);
            ctx.fillText("Here they come!", 180, 360);

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

    setBlackStroke(ctx) {
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
    };
}