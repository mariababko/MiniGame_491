class Earth{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/earth.png"),
            0, 0, 505, 508, 30, 2);

        this.x = 256;
        this.y = 600;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };
}