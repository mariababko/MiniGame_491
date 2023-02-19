class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.loadLevel(titleScreen);
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;

        if (this.currentLevel === titleScreen) {
            this.game.addEntity(new TitleScreen(this.game));
        }

        if (this.currentLevel === levelOne) {
            this.clearEntities();


            this.game.addEntity(new HealthOutline(this.game));
            this.game.addEntity(new HealthGreenBar(this.game, 72));

            this.game.addEntity(new HealthGreyBar(this.game));


            this.game.addEntity(new Shooting_Area(this.game));

            this.game.addEntity(new Asteriod(this.game));

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 2000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 3000);

            this.game.addEntity(new Earth(this.game));
        }

    };

    update() {

        //green area
        if (this.game.button1) {
            this.game.addEntityToTop(new Green_Area(this.game, 90, 457, this.game.button1));
        }
        if (this.game.button2) {
            this.game.addEntityToTop(new Green_Area(this.game, 307, 457, this.game.button2));
        }
        if (this.game.button3) {
            this.game.addEntityToTop(new Green_Area(this.game, 526, 457, this.game.button3));
        }
        if (this.game.button4) {
            this.game.addEntityToTop(new Green_Area(this.game, 747, 457, this.game.button4));
        }

    };

    draw(ctx) {
        //
    };

}