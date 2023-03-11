class Explosion{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/explosion.png"),
            0, 0, 128, 128, 12, 0.1);

        this.x = 0;
        this.y = 0;
    };

    update() {

    };

    draw(ctx) {
        if (this.game.camera.healthGreenBar.health === 0) {
            // dont draw
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        }
    };

    setX (x) {
        this.x = x;
    }

    setY (y){
        this.y = y;
    }
}