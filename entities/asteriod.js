class Asteriod{

    constructor(game) {
        this.game = game;
        const asteriodList = ["./Sprites/asteriod1.png", "./Sprites/asteriod2.png", "./Sprites/asteriod3.png"];
        this.animator = new Animator(ASSET_MANAGER.getAsset(
            asteriodList[Math.floor(Math.random() * asteriodList.length)]),
            0, 0, 100, 100, 10, 0.15);

        const randomSpots = [150, 380, 600, 830];

        this.x = randomSpots[Math.floor(Math.random() * randomSpots.length)];
        this.y = -100;
        this.speed = 400;

        this.updateBB();

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x,this.y,100,100);

    };

    update() {
        this.y += this.speed * this.game.clockTick;
        this.updateBB();
        if(this.y > 550) {
            this.game.camera.healthGreenBar.health -= 1;
            this.removeFromWorld = true;
            var explosion = new Explosion(gameEngine);
            explosion.setX(this.x);
            explosion.setY(this.y);
            gameEngine.addEntity(explosion);
            setTimeout(() => { explosion.removeFromWorld = true; }, 1000);
            this.game.camera.asteroidCount -= 1;
        };
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}