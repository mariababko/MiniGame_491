class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);

        this.loadLevel(titleScreen);
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;

        // title screen
        if (this.currentLevel === titleScreen) {
            this.clearEntities();
            this.game.addEntity(new TitleScreen(this.game));
        }

        // win screen
        if (this.currentLevel === winScreen) {
            this.clearEntities();
            this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);
            this.game.addEntity(new WinScreen(this.game));
        }

        // lose screen
        if (this.currentLevel === loseScreen) {
            this.clearEntities();
            this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);
            this.game.addEntity(new LoseScreen(this.game));
        }

        if (this.currentLevel === levelOne) {
            this.clearEntities();


            this.game.addEntity(new HealthOutline(this.game));
            this.game.addEntity(this.healthGreenBar);

            this.game.addEntity(new HealthGreyBar(this.game));


            this.game.addEntity(new Shooting_Area(this.game));

            this.game.addEntity(new Asteriod(this.game));

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 2000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 3000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 4000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 5000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 6000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 7000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 8000);

            setTimeout(() => { this.game.addEntity(new Asteriod(this.game)); }, 9000);

            setTimeout(() => { this.game.camera.loadLevel(winScreen); }, 11000);

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