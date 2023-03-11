class Shooting_Area{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/shooting_area.png"),
            0, 0, 984, 285, 1, 2);

        this.x = 30;
        this.y = 400;

        this.BB = new BoundingBox(this.x + 62,this.y + 59,878,123);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Yellow';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };
}


// ------------------------------------------------------------------------

class Green_Area {
    constructor(game, x, y, button) {
        Object.assign(this, {game, x, y, button});
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/green_area.png"),
            44, 57, 225, 128, 1, 2);

        this.BB = new BoundingBox(this.x,this.y,225,128);

    };


    update() {

        //collision
        var that = this;
        this.game.entities.forEach(function (entity) {
            //if the entity has a bounding box and we collided with it
            if (entity.BB && that.BB.collide(entity.BB)) {

                if (entity instanceof Asteroid && (entity.BB.bottom >= 400)) {
                    if (that.button) {
                        entity.removeFromWorld = true;

                        //if player has killed last asteroid, load winscreen
                        if (entity.lastAsteroid === true) {
                            that.game.camera.loadLevel(winScreen);
                        }

                    }

                }

            }
        });


        if (this.button) {
            this.removeFromWorld = true;
        }

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Yellow';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }
    };

}