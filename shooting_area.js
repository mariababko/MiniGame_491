class Shooting_Area{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./shooting_area.png"),
            0, 0, 984, 285, 1, 2);

        this.x = 30;
        this.y = 400;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}