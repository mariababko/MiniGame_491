class HealthOutline{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/health_outline.png"),
            2, 42, 88, 14, 1, 2);

        this.x = 20;
        this.y = 20;
    };

    update() {
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
}

class HealthGreyBar{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/health_outline.png"),
            16, 29, 72, 6, 1, 2);

        this.x = 37;
        this.y = 30;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5.8);
    };
}

class HealthGreenBar{

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.dWidth = 417;
        this.dHeight = 35;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/health.png")

        this.width = 72;

        this.health = 7;

    };

    update() {
        if (this.health === 6) {
            this.updateWidths(63, 365.4);
        }
        if (this.health === 5) {
            this.updateWidths(54, 313);
        }
        if (this.health === 4) {
            this.updateWidths(45, 261);
        }
        if (this.health === 3) {
            this.updateWidths(36, 208.8);
        }
        if (this.health === 2) {
            this.updateWidths(27,156.6);
        }
        if (this.health === 1) {
            this.updateWidths(18, 104.4);
        }
        if (this.health === 0) {
            this.updateWidths(0, 0);
            ASSET_MANAGER.pauseBackgroundMusic();
            this.game.camera.loadLevel(loseScreen);
        }

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 16, 49, this.width, 6, this.x, this.y, this.dWidth, this.dHeight);
    };

    updateWidths(width, dWidth) {
        this.width = width;
        this.dWidth = dWidth;
    }

}