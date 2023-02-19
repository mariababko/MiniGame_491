class HealthOutline{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/health_outline.png"),
            2, 42, 88, 14, 1, 2);

        this.x = 20;
        this.y = 20;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
}

class HealthGreyBar{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/health_outline.png"),
            16, 29, 72, 6, 1, 2);

        this.x = 34;
        this.y = 30;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5.8);
    };
}

class HealthGreenBar{

    constructor(game, width) {
        Object.assign(this, {game, width})
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/health.png"),
            16, 49, width, 6, 1, 2);

        this.x = 34;
        this.y = 30;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5.8);
    };

    updateWidth(width) {
        this.width = width;
    }
}