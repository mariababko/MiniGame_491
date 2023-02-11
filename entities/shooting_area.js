class Shooting_Area{

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/shooting_area.png"),
            0, 0, 984, 285, 1, 2);

        this.x = 30;
        this.y = 400;
        this.speed = 100;
    };

    update() {
        // var green_area_button1 = new Green_Area(gameEngine);
        // green_area_button1.setX(45);
        // green_area_button1.setY(400);
        // gameEngine.addEntity(green_area_button1);
        // green_area_button1.removeFromWorld = true;
        // if(this.game.button1) {
        //     green_area_button1.removeFromWorld = false;
        // };
        // if(!this.game.button1) {
        //     green_area_button1.removeFromWorld = true;
        // };
        // if (this.game.button1) {
        //     this.x = 45;
        //     this.y = 400;
        // }
        // if (this.game.button2) {
        //     this.x = 263;
        //     this.y = 400;
        // }
        // if (this.game.button3) {
        //     this.x = 482;
        //     this.y = 400;
        // }
        // if (this.game.button4) {
        //     this.x = 703;
        //     this.y = 400;
        // }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

class Green_Area {
    constructor(game, x, y, button) {
        Object.assign(this, {game, x, y, button});
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/green_area.png"),
            0, 0, 315, 228, 1, 2);

    };

    update() {
        if (this.button) {
            this.removeFromWorld = true;
        }
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