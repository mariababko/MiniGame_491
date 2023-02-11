class Explosion{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/explosion.png"),
            0, 0, 128, 128, 12, 0.1);

        this.x = 0;
        this.y = 0;
        this.speed = 100;
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        // if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    setX (x) {
        this.x = x;
    }

    setY (y){
        this.y = y;
    }
}